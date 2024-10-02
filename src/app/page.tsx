import Image from 'next/image';
import img from "@/app/images/myImage.png";

export default function Home() {
  return (
    <div className="parent_container">
      <div className="text_container">
        <div>
         <span className="myName">Muhammad Azhar Khan</span><br/> 
         <span className="description">I am a professional <span className="proffesion">CAD/3D Designer</span></span>
        </div>
      </div>
      <div className="image_container">
        <div>
         <Image
         src={img}
         width={945}
         alt="/"
         />
        </div>
      </div>
    </div>
  )
}
