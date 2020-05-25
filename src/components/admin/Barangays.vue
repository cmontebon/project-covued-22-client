<template>
    <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="form-row">
                <div class="form-group col-md-5">
                    <label>Barangay</label>
                    <input type="text" class="form-control" v-model="formData.name">
                </div>
                <div class="form-group col-md-5">
                    <label>Location</label>
                    <input type="text" class="form-control" v-model="formData.lat_long" placeholder="e.g 8.4710803,124.6461613">
                </div>
                <div class="col-md-2">
                    <button :disabled="validateForm" type="submit" class="btn btn-primary submit mr-2" @click="submit">Save</button>
                    <button v-if="isEdited" type="submit" class="btn btn-default submit" @click="resetForm">Cancel</button>
                </div>
            </div>

            <h2 class="pt-5">List of Barangays</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="brgy in barangays" :key="brgy.id">
                        <td>{{ brgy.id }}</td>
                        <td>{{ brgy.name }}</td>
                        <td>
                            <button type="button" class="btn btn-link" @click="edit(brgy)">Edit</button>
                            <button type="button" class="btn btn-link" @click="remove(brgy.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Barangays',
    data() {
        return {
            formData: {
                id: '',
                name: '',
                lat_long: ''
            },
            oldFormData: {},
            isEdited: false
        }
    },
    methods: {
        async submit() {
            if (this.isEdited) {
               await this.$store.dispatch('updateBarangay', this.formData)
            } else {
               await this.$store.dispatch('addBarangay', this.formData)
            }

            this.resetForm();
        },
        edit(brgy) {return {
      componentLoaded: false,
    };
            this.isEdited = true
            this.formData.id = brgy.id
            this.formData.name = brgy.name
            this.formData.lat_long = brgy.lat_long
            this.oldFormData = this.formData
        },
        remove(id) {
            this.$store.dispatch('deleteBarangay', id)
        },
        resetForm() {
            this.isEdited = false
            this.formData.name = ''
            this.formData.lat_long = ''
            this.formData.id = ''
            this.oldFormData = {}
        },
        
    },
    computed: {
        barangays() {
            return this.$store.getters.barangays
        },
        validateForm() {
            return this.formData.name && this.formData.lat_long ? false : true
        }
    },
    created() {
       this.$store.dispatch('fetchBarangays')
    }
}
</script>

<style scoped>
    .submit {
        margin-top: 29px;
    }
</style>