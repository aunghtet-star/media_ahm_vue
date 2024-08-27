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
                    <div class="card bg-dark border-1 radius p-5">
                        <div class="card-header p-2">
                            <legend class="text-center text-white">My Profile</legend>
                        </div>
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="active tab-pane" id="activity">
                                    <div>
                                        <div class="form-group row">
                                            <label for="inputName"
                                                class="col-sm-3 col-form-label text-white">Name</label>
                                            <div class="col-sm-8">
                                                <span v-if="errors.name" style="color: red;" >{{ errors.name[0] }}</span>
                                                <input type="text"  v-model="profileData.name"
                                                    class="form-control" id="inputName" placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputEmail"
                                                class="col-sm-3 col-form-label text-white">Email</label>
                                            <div class="col-sm-8">
                                                <span v-if="errors.email" style="color: red;">{{ errors.email[0] }}</span>
                                                <input type="email" v-model="profileData.email" name="email"
                                                    value="" class="form-control" id="inputEmail" placeholder="Email">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="offset-sm-3 col-sm-8">
                                                <a class="change-password-text text-white text-decoration-underline" @click="changePassword()">Change
                                                    Password</a>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-sm-3 col-sm-8">
                                                <button type="button" @click="back()"
                                                    class="bg-primary text-white py-2 px-3 mr-3">Back</button>
                                                <button type="button" @click="updateProfile()"
                                                    class="bg-dark text-white py-2 px-3 text-white">Update</button>
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
</template>

<style>
    .change-password-text:hover {
        cursor: pointer;
        text-decoration: underline !important;
    }
</style>


<script src="../js/profilePage.js"></script>
