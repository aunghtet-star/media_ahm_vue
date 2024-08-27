import axios from "axios";
import { mapState } from "vuex";

export default {
    name: "PostDetails",

    data() {
        return {
            post: {},
            viewCount: "",
            // publicPath: process.env.BASE_URL,
            postCommentText: "",
            comments: [],
            userName: '',
   
            // commentMaxLength: 100
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

    // created() {
    //     this.getComments();
    // },

    methods: {
        
        
        // store comment
        comment() {
            // console.log("click");
            if (this.postCommentText.trim() != "") {
                let comment = {
                    user_id: this.userData.id,
                    post_id: this.$route.params.postId,
                    post_comment: this.postCommentText,
                };
                const newComment = axios
                .post("http://127.0.0.1:8000/api/comment/create", comment).then(response => {
                    this.comments.push(response.data.comment);
                    this.postCommentText = "";
                    // comment push လုပ်ပြီးတိုင်း comments အားလုံးပြန်ခေါ်
                    this.getComments();
                    // this.userName = response.data.comments.user_name
                });

            }

        },

        formattedDate(dateString) {
            const options = {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options);
        },
        
        // retrieve all comments
        getComments() {
            
            let post = {
                postId: this.$route.params.postId,
            };
            axios.post("http://127.0.0.1:8000/api/comments", post)
                .then(response => {
                    this.comments = response.data.comments;
                    console.log(response.data.comments);
                    // for (let i=0; i<response.data.comments.length; i++) {
                    //     response.data.comment[i].user_name = 
                    //     this.comments.push(response.data.comment[i]);
                        
                    // }
                    
                });
        },
        
        
        showPostDetails() {
            let post = {
                postId: this.$route.params.postId,
            };

            axios
                .post("http://127.0.0.1:8000/api/post/details", post)
                .then((response) => {
                    // console.log(response.data.post);
                    if (response.data.post == null){
                        this.$router.push({name: "404page"})
                    }else {
                        if (response.data.post.image != null) {
                            // db image
                            let image =
                                "http://127.0.0.1:8000/storage/postImage/" +
                                response.data.post.image;
    
                            response.data.post.image = image;
                        } else {
                            // default image, if there is no post image
                            response.data.post.image =
                                "http://127.0.0.1:8000/storage/default-image/defaultimage.jpg";
                        }
    
                        this.post = response.data.post;
                    }
                })
                .catch((err) => console.log(err));
        },

        viewCountLoad() {
            let data = {
                postId: this.$route.params.postId,
                userId: this.userData.id,
            };
            axios
                .post("http://127.0.0.1:8000/api/post/viewCount", data)
                .then((response) => {
                    // console.log(response);
                    if (response.data.isLogginedStatus === true) {
                        this.viewCount = response.data.post.length;
                    }
                    
                    // console.log(viewCount);
                })
                .catch(error=>{
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        // console.error('Error response:', error.response);
                    }
                });
        },

        back() {
            // history.back();
            this.$router.push({ name: "home" });
        },
    },

    mounted() {
        this.getComments();
        this.showPostDetails();
        this.viewCountLoad();
        // this.fetchComments();
        // console.log(this.userData);
        // console.log(this.getstorageToken);
        // this.postId = this.$route.params.postId;

        // console.log(this.postId);
    },

    beforeMount() {
        
        // this.getComments();
    },
};
