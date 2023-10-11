import Image from 'next/image'

// Images
import benifitProductOne from '../../assets/benifit/benifit_product_one.png'
import benifitProductTwo from '../../assets/benifit/benifit_product_two.png'
import benifitImage from '../../assets/benifit/benifit_image_modified.png'
import benifitTextImage from '../../assets/benifit/benifit_text_modified.png'

const Benefit = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-primaryText text-xl md:text-2xl text-center font-semibold w-fit mx-auto border-b-2 border-primary pb-2">
        Benifits
      </h1>
      <h1 className="text-primaryText text-2xl md:text-3xl text-center mt-5 mb-3 font-semibold">
        Why Use Our Maintenance Equipment?
      </h1>
      <p className="text-center text-slate-800">
        We are offering cost saving modern equipment that are used
        <br /> worldwide for Textile Mill Maintenance
      </p>
      <div className="md:flex mx-auto gap-4 justify-around items-center bg-primary mt-8 px-8 left_top_right_bottom_radius_big">
        <Image
          src={benifitProductOne.src}
          alt="benifit product one"
          width={400}
          height={400}
        />
        <div>
          <p className="text-primaryText">Lorem ipsum</p>
          <h1 className="text-primaryText text-xl font-semibold mb-4">
            Lorem ipsum dolor
          </h1>
          <p className="text-gray-700 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            explicabo velit quo nam veritatis expedita ab harum unde sit nemo.
          </p>
        </div>
        <Image
          src={benifitImage.src}
          alt="benifit product one"
          width={500}
          height={500}
        />
      </div>
      <div className="md:flex mx-auto gap-4 justify-around items-center bg-primary mt-8 px-8 left_top_right_bottom_radius_big mb-8">
        <Image
          src={benifitTextImage.src}
          alt="benifit product one"
          width={500}
          height={500}
        />
        <div>
          <p className="text-primaryText">Lorem ipsum</p>
          <h1 className="text-primaryText text-xl font-semibold mb-4">
            Lorem ipsum dolor
          </h1>
          <p className="text-gray-700 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            explicabo velit quo nam veritatis expedita ab harum unde sit nemo.
          </p>
        </div>
        <Image
          src={benifitProductTwo.src}
          alt="benifit product one"
          width={400}
          height={400}
        />
      </div>

      <div className="w-full md:w-[60%] pb-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <h1 className="text-center bg-primary font-semibold py-2">
          AIR LEAK AUDIT REPORT
        </h1>

        <div className="md:flex justify-between px-6">
          <div>
            <h1 className=" text-md font-semibold text-primaryText">
              1. Customer&apos;S Name:
            </h1>
            <p className="pl-3 mt-1 text-sm text-gray-600">
              ### Spinning Mills
            </p>

            <h1 className="mt-4 text-md font-semibold text-primaryText">
              2. Installed Compressor Capacity:
            </h1>
            <p className="pl-3 mt-1 text-sm text-gray-600">
              a. 180 kw kaser 1080Cfm
            </p>
            <p className="pl-3 text-sm text-gray-600">
              b. 250 kw kaser 1480Cfm
            </p>

            <h1 className="mt-4 text-md font-semibold text-primaryText">
              3. Installed Machines:
            </h1>
            <p className="pl-3 mt-1 text-sm text-gray-600">Autoconer:24</p>
            <p className="pl-3 text-sm text-gray-600">Draw Frames:22</p>
            <p className="pl-3 text-sm text-gray-600">Blow Room:28 (3 LINES)</p>
            <p className="pl-3 text-sm text-gray-600">Ring Frames:83</p>
            <p className="pl-3 text-sm text-gray-600">Cembers:31</p>
            <p className="pl-3 text-sm text-gray-600">Cards:58</p>
            <p className="pl-3 text-sm text-gray-600">Lap Former:11</p>
          </div>
          {/* 2nd part */}
          <div>
            <h1 className=" text-md font-semibold text-primaryText">
              4. Customer&apos;S Name:
            </h1>
            <p className="pl-3 mt-1 text-sm text-gray-600">
              ### Spinning Mills
            </p>

            <h1 className="mt-4 text-md font-semibold text-primaryText">
              5. Installed Compressor Capacity:
            </h1>
            <p className="pl-3 mt-1 text-sm text-gray-600">
              a. 180 kw kaser 1080Cfm
            </p>
            <p className="pl-3 text-sm text-gray-600">
              b. 250 kw kaser 1480Cfm
            </p>

            <h1 className="mt-4 text-md font-semibold text-primaryText">
              6. Installed Machines:
            </h1>
            <p className="pl-3 mt-1 text-sm text-gray-600">Autoconer:24</p>
            <p className="pl-3 text-sm text-gray-600">Draw Frames:22</p>
            <p className="pl-3 text-sm text-gray-600">Blow Room:28 (3 LINES)</p>
            <p className="pl-3 text-sm text-gray-600">Ring Frames:83</p>
            <p className="pl-3 text-sm text-gray-600">Cembers:31</p>
            <p className="pl-3 text-sm text-gray-600">Cards:58</p>
            <p className="pl-3 text-sm text-gray-600">Lap Former:11</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit
