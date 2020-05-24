<template>
    <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <h2>Cases</h2>

            <div class="row">
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Age</label>
                        <input type="text" class="form-control" placeholder="Age">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Classification</label>
                        <select class="form-control">
                            <option>PUI</option>
                            <option>PUM</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Barangay</label>
                        <select class="form-control">
                            <option>Camaman-an</option>
                            <option>Nazareth</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-primary submit" >Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="pt-3">List of Cases</h2>
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
        margin-top: 30px;
    }
</style>