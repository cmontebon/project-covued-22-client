<template>
    <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="form-row">
                <div class="form-group col-md-5">
                    <label>Barangay</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group col-md-5">
                    <label>Location</label>
                    <input type="text" class="form-control" placeholder="e.g 8.4710803,124.6461613">
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-primary submit">Save</button>
                </div>
            </div>

            <h2 class="pt-5">List of Barangays</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    </tr>
                    <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    <td>adipiscing</td>
                    <td>elit</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </main>
    </div>
</template>


<style scoped>
    .submit {
        margin-top: 29px;
    }
</style>