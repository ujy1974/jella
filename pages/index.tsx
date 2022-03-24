import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>J-Ella</title>
      </Head>

      <div className='w-full h-[100vh] bg-teal-400 relative overflow-hidden'>
        <div className="w-[600px] 2xl:w-[800px] 2xl:h-[800px] h-[600px] border-[20px] rounded-full border-teal-300 absolute -top-[150px] -left-[150px] hidden xl:block"></div>
        <div className="w-[600px] 2xl:w-[800px] 2xl:h-[800px] h-[600px] border-[20px] rounded-full border-teal-300 absolute -bottom-[150px] -right-[150px] hidden xl:block"></div>
        <div className='absolute top-0 w-full xl:w-[1000px] left-1/2 -translate-x-1/2 py-5 xl:px-0 px-8 text-white font-bold text-2xl xl:text-3xl'>
          J-Ella
        </div>
        <div className='absolute z-20 top-1/3 left-1/2 -translate-x-1/2 xl:top-1/2 -translate-y-1/2 w-full xl:w-[1000px] xl:px-0 px-8 text-white xl:flex xl:justify-between'>
          <div className="space-y-5 flex flex-col justify-center">
            <div className='font-bold xl:text-left text-center text-3xl xl:text-5xl'>새로운 경험을 위한 쇼핑앱<br/>제이엘라</div>
            <div className='xl:text-left text-center text-base xl:text-lg'>내 코디 사진을 피드에 공유하고<br/>포인트를 조건없이 마음대로 사용하세요!</div>
            <div className='flex justify-center xl:justify-start font-bold flex-wrap xl:space-x-4'>
              <Link href="">
                <div className='border flex space-x-2 items-center border-white py-3 px-7 rounded-lg xl:mx-0 mx-2 mb-2 cursor-pointer'>
                  <div className="xl:w-8 xl:h-8 w-6 h-6 bg-cover bg-[url('/images/apple.png')]"></div>
                  <div>Apple Store</div>
                </div>
              </Link>
              <Link href="">
                <div className='border flex space-x-2 items-center border-white py-3 px-7 rounded-lg xl:mx-0 mx-2 mb-2 cursor-pointer'>
                  <div className="xl:w-8 xl:h-8 w-6 h-6 bg-cover bg-[url('/images/google.png')]"></div>
                  <div>Google Play</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-col justify-center xl:flex hidden">
            <div className="w-[380px] h-[630px] bg-cover bg-[url('/images/phone.png')]"></div>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-[50%] left-1/2 -translate-x-1/2 absolute bottom-0 block xl:hidden bg-cover bg-[url('/images/phone.png')]"></div>
      </div>
      <div className='xl:flex absolute w-full xl:w-[1000px] left-1/2 -translate-x-1/2 py-16 xl:px-0 px-8 xl:space-x-20'>
        <div className="max-w-[410px]">
          <div className='text-gray-700 text-xl font-bold mb-5'>J-Ella</div>
          <div className='space-y-3'>
            <div className='text-gray-500 text-base'>(주) 제이엘라 | 대표: 엄서준</div>
            <div className='text-gray-500 text-base'>사업자등록번호 675-81-02039</div>
            <div className='text-gray-500 text-base'>주소: 서울특별시 송파구 방이동 45-2 금복빌딩 6층 604호</div>
            <div className='text-gray-500 text-base'>개인정보 처리방침 | 서비스 이용 약관</div>
            <div className='text-gray-500 text-base'>(주)제이엘라는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 따라서, 등록된 상품, 거래정보 및 거래에 대하여 ㈜제이엘라는 어떠한 책임도 지지 않습니다.</div>
            <div className='text-gray-500 text-base'>J-Ella Corp., Inc. All rights reserved.</div>
          </div>
        </div>
        <div className='xl:mt-0 mt-10'>
          <div className='text-gray-700 text-xl font-bold mb-5'>고객센터</div>
          <div className='space-y-3'>
            <div className='text-gray-500 text-base'>전화 : 1644-5903</div>
            <div className='text-gray-500 text-base'>업무시간  10:00 ~ 18:00</div>
            <div className='text-gray-500 text-base'>점심시간 13:00 ~ 14:00</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home