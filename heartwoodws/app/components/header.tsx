import Image from "next/image"

export default function Header(){
    return (
        <div className="flex content-center border-4 border-sky-500">
            <div className="">
                <Image
                src="https://heartwoodbooksandart-com.3dcartstores.com/cdn-cgi/image/quality%3D100/assets/images/Logo/Heartwood Books and Art Red 3D aligned.png"
                alt="Heartwood Books and Art"
                className=""
                width={290}
                height={100}
                priority/>
            </div>
        </div>
        
    )
}