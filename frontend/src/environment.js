let IS_PROD = false;
const server = IS_PROD ?
    "https://pixel-call-backend.vercel.app/" :

    "http://localhost:8000"


export default server;