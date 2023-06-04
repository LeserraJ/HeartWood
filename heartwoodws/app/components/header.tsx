import Image from "next/image"

export default function Header(){
    return (
    <div className=" flex justify-center">
        <div className="flex w-1/2 border-4 border-sky-500 pt-2">
            <div className="border-4 border-yellow-500">
                <Image
                src="https://heartwoodbooksandart-com.3dcartstores.com/cdn-cgi/image/quality%3D100/assets/images/Logo/Heartwood Books and Art Red 3D aligned.png"
                alt="Heartwood Books and Art"
                className=""
                width={290}
                height={100}
                priority/>
            </div>
                <div className="flex justify-end">
                    <div className="flex border-4 border-green-500 pt-3" >
                        <table>
                         <tbody>
                                <tr>
                                    <td className="underline">My Account</td>
                                    <td>Cart Icon</td>
                                    <td className="underline">View Cart</td>
                                </tr>
                                <tr>
                                    <td>Search Bar</td>
                                </tr>
                                <tr>
                                    <td>Hello, Guest!</td>
                                    <td className="underline">Login</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
     </div>
        
    )
}

/*<p className="underline">My Account</p>
<p>cartlogo here</p>
<p className="underline">View Cart</p>
<p>Search Bar</p>
<p>Hello, Guest!</p>
<p>Login</p>*/