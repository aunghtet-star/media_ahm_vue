<template>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row justify-content-end mt-2 mb-5">
                        <button class="btn btn-sm mr-4" @click="home()">Home</button>
                        <button class="btn btn-sm mr-4" v-if="isLoggedIn" @click="profile()">Profile</button>
                        <button class="btn btn-sm" v-if="isLoggedIn" @click="logout()">Logout</button>
                    </div>

                    <!-- <h1 v-if="!isLoggedIn">You don't have permission to see.</h1> -->
                </div>
            </div>
            <div class="row" style="min-height: 600px;">
                <div class="col-lg-6 mx-auto">
                    <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{{ successMessage }}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div v-if="failMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{{ failMessage }}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="card bg-dark border-1 radius p-5">
                        <div class="card-header p-2">
                            <legend class="text-center text-white">Change Password</legend>
                        </div>
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="active tab-pane" id="activity">
                                    <div>
                                        
                                        <div class="form-group row align-items-center">
                                            <label for="inputName" class="col-sm-3 col-form-label text-white">Old
                                                Password</label>
                                            <div class="col-sm-8">
                                                <span v-if="errors.oldPassword" style="color: red;" >{{ errors.oldPassword[0] }}</span>
                                                <input type="password" class="form-control" v-model="user.oldPassword" placeholder="old password">
                                            </div>
                                        </div>
                                        <div class="form-group row align-items-center">
                                            <label for="inputEmail" class="col-sm-3 col-form-label text-white">New
                                                Password</label>
                                            <div class="col-sm-8">
                                                <span v-if="errors.newPassword" style="color: red;">{{ errors.newPassword[0] }}</span>
                                                <input type="password" class="form-control" v-model="user.newPassword" placeholder="new password">
                                            </div>
                                        </div>

                                        <div class="form-group row align-items-center">
                                            <label for="inputEmail" class="col-sm-3 col-form-label text-white">Confirm
                                                Password</label>
                                            <div class="col-sm-8">
                                                <span v-if="errors.confirmPassword" style="color: red;">{{ errors.confirmPassword[0] }}</span>
                                                <input type="password" class="form-control" v-model="user.confirmPassword" placeholder="confirm password">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="offset-sm-3 col-sm-8">
                                                <button type="button" @click="back()"
                                                    class="bg-primary text-white py-2 px-3 ">Back</button>

                                                <button type="button" @click="changePassword()"
                                                    class="bg-dark text-white py-2 px-3 ml-3">Update</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <!-- <div class="pagination-area pb-45 text-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="single-wrap d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span></a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="details.html">01</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">02</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">03</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span
                                            class="flaticon-arrow right-arrow"></span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>s
        </div>
    </div> -->
    <!-- End pagination  -->
</template>


<script src="../js/changePassword.js"></script>
