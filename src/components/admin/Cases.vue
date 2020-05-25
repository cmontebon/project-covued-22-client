<template>
    <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <h2>Cases</h2>

            <div class="row">
                <input type="hidden" v-model="formData.id">
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Age</label>
                        <input type="text" class="form-control" placeholder="Age" v-model="formData.age">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Classification</label>
                        <select class="form-control" v-model="formData.classification">
                            <option value="PUI">PUI</option>
                            <option value="PUM">PUM</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Barangay</label>
                        <select class="form-control" v-model="formData.brgy_id">
                            <option v-for="brgy in barangays" :key="brgy.id" :value="brgy.id">{{ brgy.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <div>
                            <button :disabled="validateForm" type="submit" class="btn btn-primary submit mr-2" @click="submit">Save</button>
                            <button v-if="formData.id" type="submit" class="btn btn-default submit" @click="resetForm">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="pt-3">List of Cases</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Case ID</th>
                        <th>Age</th>
                        <th>Classification</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="_case in cases" :key="_case.id">
                        <td>{{ _case.id }}</td>
                        <td>{{ _case.age }}</td>
                        <td>{{ _case.classification }}</td>
                        <td>{{ _case.barangay.name }}</td>
                        <td>
                            <button type="button" class="btn btn-link" @click="editCase(_case)">Edit</button>
                            <button type="button" class="btn btn-link" @click="deleteCase(_case.id)">Delete</button>
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
    name: 'Cases',
    data() {
        return {
            formData: {
                id: '',
                age: '',
                classification: '',
                brgy_id: '',
            }
        }
    },
    methods: {
        async submit() {
            if (this.formData.id) {
                await this.$store.dispatch('updateCase', this.formData)
            } else {
                await this.$store.dispatch('addCase', this.formData)
            }
            
            this.resetForm();
        },
        editCase(_case){
            this.formData.id = _case.id
            this.formData.age = _case.age
            this.formData.classification = _case.classification
            this.formData.brgy_id = _case.brgy_id
        },
        deleteCase(id) {
            this.$store.dispatch('deleteCase', id)
        },
        resetForm(){
            this.formData.id = ''
            this.formData.age = ''
            this.formData.classification = ''
            this.formData.brgy_id = ''
        }
    },
    computed: {
        cases() {
            return this.$store.getters.cases
        },
        barangays() {
            return this.$store.getters.barangays
        },
        validateForm() {
            const {age, classification, brgy_id} = this.formData
            return age && classification && brgy_id ? false : true
        }
    },
    created() {
       this.$store.dispatch('fetchCases')
       this.$store.dispatch('fetchBarangays')
    }
}
</script>

<style scoped>
    .submit {
        margin-top: 30px;
    }
</style>