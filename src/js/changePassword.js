import axios from "axios";
import { mapState } from "vuex";

export default {
    name: "ChangePassword",

    data() {
        return {
            user: {
                user_id: '',
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            },
            successMessage: "",
            failMessage: "",
            errors: {}
           
        };
    },

    computed: {
        ...mapState(["userData"]),

        getstorageToken() {
            return this.$store.getters.storageToken;
        },
    
        isLoggedIn() {
            return localStorage.getItem('token') !== null;
        },
        
    },

    methods: {
        
        home() {
            this.$router.push({ name: "home" });
        },
        
        profile() {
            this.$router.push({name: 'profile'});
        },

        login() {
            this.$router.push({ name: "login" });
        },
        
        logout() {
            this.$store.dispatch("logout");
            this.login();
        },

        back() {
            // history.back();
            this.$router.push({ name: "profile" });
        },

        changePassword() {
            console.log(this.user);
            axios.post('http://127.0.0.1:8000/api/change/password', this.user)
            .then(response=>{
                // console.log(response.data);
                if(response.data.successMessage) {
                    this.successMessage = response.data.successMessage
                } else {
                    this.failMessage = response.data.failMessage
                }
            }).catch(err=> {
                if (err.response && err.response.status == 422){
                    this.errors = err.response.data.errors
                    
                }
            })
        },

        
    },

    mounted() {
        // console.log(this.profileData);
        this.user.user_id = this.userData.id
        // console.log(showProfileData);
        // this.showProfileData();
        // console.log(this.profileData);
        
    },

    beforeMount() {
        
        // this.getComments();
    },
};
