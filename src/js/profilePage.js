import axios from "axios";
import { mapState } from "vuex";

export default {
    name: "ProfilePage",

    data() {
        return {
            // commentMaxLength: 100
            profileData: {
                id: "",
                name: "",
                email: "",
            },

            successMessage: "",
            errors: {},
            cursor: 'pointer',
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
            this.$router.push({ name: "home" });
        },

        showProfileData() {
            this.profileData.id = this.userData.id;
            this.profileData.name = this.userData.name;
            this.profileData.email = this.userData.email;
            // console.log(this.profileData.name, this.profileData.email);
        }, 

        updateProfile() {            
            axios.post('http://127.0.0.1:8000/api/profile/update', this.profileData)
            .then((response)=>{
                this.successMessage = response.data.message;
                // console.log(this.successMessage);
                this.$store.dispatch('setUserData', response.data.user);
            }).catch(myerror=>{
                console.log(myerror.response);
                if (myerror.response && myerror.response.status === 422){
                    this.errors = myerror.response.data.errors;
                }
            })
        },

        changePassword() {
            // console.log("hello");
            this.$router.push({ name: "changePassword" });
        }

        
    },

    mounted() {
        // console.log(this.profileData);
        
        // console.log(showProfileData);
        this.showProfileData();
        // console.log(this.profileData);
        
    },

    beforeMount() {
        
        // this.getComments();
    },
};
