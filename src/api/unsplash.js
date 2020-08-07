import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2W_mTKiq3E3GptfGLiQ9zVrDz9YrW2baVhwg1KbLiFk'
  }
})