import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import React from "react";

export default function Login(){
    return (
        <>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Welcome Back! Login to your account using login page." />
            </Helmet>
            <div className="flex w-full  items-center bg-white-a700 py-[34px] md:flex-col sm:py-5 ">
                <div className="w-[42%] md:w-full md:px-5">
                    <div className="flex flex-col items-center">
                        <div className="relative mx-[70px] h-[156px] content-center self-stretch md:mx-0 md:h-auto">
                            <Heading as="h1" className="m1-auto">Welcome</Heading>
                            <Text size="text" as="p" className="absolute bottom-[10.923px] right-[10%] m-auto">
                                we are glad to see you back with us
                            </Text>
                        </div>
                        <div className="mx-[62px] mt-3.5 flex flex-col items-end gap-6 self-stretch md:mx-0">
                            <div className="flex w-[78%] items-center gap-1.5 rounded-[12px] bg-gray-100 px-[18px] py-3.5 md:w-full">
                                <Img src="images/img_frame.svg" alt="User Image" className="h-[24px] w-[24px]" />
                                <Text as="p">Username</Text>
                            </div>
                            <div className="flex w-[78%] items-center gap-1.5 rounded-[12px] bg-gray-100 px-[18px] py-3.5 md:w-full">
                                <Img src="images/img_frame_gray_900.svg" alt="Password Image" className="h-[24px] w-[24px]" />
                                <Text as="p">Password</Text>
                            </div>
                            <Button shape="round">NEXT</Button>
                        </div>
                        <Text size="textmd" as="p" className="mr-[174px] mt-6 self-end md:mr-0">
                            Login with Others
                        </Text>
                        <div className="mt-6 flex items-start self-stretch sm:flex-col">
                            <Img src="images/img_vector.png" alt="social Icon" className="mt-10 h-[136px] w-[12%] self-end object-contain sm:w-full sm:self-auto" />
                            <div className="flex flex-1 flex-col gap-4 p1-14 pr-[62px] md:px-5 sm:self-stretch">

                                {/* Google Login Button */}
                                <div className="ml-7 flex items-center justify-center gap-2 rounded-[12px] border border-solid border-gray-900 p-2.5 md:ml-0">
                                    <Img src="images/img_google_1.png" alt="Google Icon" className="h-[30px] w-[30px] object-cover" />
                                    <Text as="p">
                                        <span>Login with&nbsp;</span>
                                        <span className="font-bold">Google</span>
                                    </Text>
                                </div>

                                {/* Facebook Login Button */}
                                <div className="ml-7 flex items-center justify-center gap-2 rounded-[12px] border border-solid border-gray-900 p-2.5 md:ml-0">
                                    <Img src="images/img_facebook_1.png" alt="Facebook Icon" className="h-[30px] w-[30px] object-cover" />
                                    <Text as="p">
                                        <span>Login with&nbsp;</span>
                                        <span className="font-bold">Facebook</span>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Image */}
                <div className="flex-1 px-[34px] md:self-stretch md:px-5">
                    <Img
                        src="images/img_rectangle_4.png"
                        alt="Secondary Image"
                        className="ml-7 h-[700px] w-full rounded-[40px] object-cover md:ml-0 md:h-auto"
                    />
                </div>


            </div>
        </>
    );
}