import { executionAsyncResource } from 'async_hooks';
import { v2n  as cloudinary} from 'cloudinary';
import fs from 'fs'; // file system module for file operations.



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET,
    });


    const uploadoncloudinary= async function(LocalFilePath){
        try {
            if(!LocalFilePath) return null;
            // upload file on cloudinary
            const response= await cloudinary.uploader.upload(LocalFilePath,{
                resource_type:"auto",


            })
            // file has been upladed successfully!!
            console.log("File is uploaded at cloudinary",response.url);

            return response;
            
            
        } catch (error) {
            fs.unlinkSync(LocalFilePath)
            return null 
            
            
        }


    }

    export {uploadoncloudinary}

//     // Upload an image
//     const uploadResult = await cloudinary.uploader
//     .upload(
//         'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//             public_id: 'shoes',
//         }
//     )
//     .catch((error) => {
//         console.log(error);
//     });
 
//  console.log(uploadResult);
    
    
    