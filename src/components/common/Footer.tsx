import Image from "next/image";

import enamad from "../../../public/logos/enamad.webp";
import logo from "../../../public/logos/logo.svg";
import samandehi from "../../../public/logos/samandehi.png";

const Footer: React.FC = () => (
  <footer className="bg-neutral-200 dark:bg-slate-700 dark:text-slate-300">
    <div className="container mx-auto px-12 py-4">
      <div className="xl:flex pb-4 border-b-[1px] border-gray-100">
        <div className="w-full xl:w-1/3 flex flex-col justify-around items-center gap-2 text-xs px-8 mx-auto">
          <Image src={logo} width={48} height={48} alt="فروشگاه کتاب" />
          <p className="text-center xl:text-justify ">
            پردیس کتاب سایت و اپلیکیشن دانلود کتاب الکترونیکی و دانلود کتاب صوتی است.
            در پردیس کتاب هزاران کتاب، مجله، روزنامه و کتاب گویا را می‌توانید دانلود
            کنید و با موبایل، تبلت و رایانه آن‌ها را بخوانید. در پردیس کتاب کتاب‌های
            روانشناسی، رمان و داستان، کتاب‌های تاریخی، کتاب فلسفی و هزاران کتاب
            رایگان برای دانلود وجود دارد.
          </p>
          <div className="flex justify-center">
            <Image src={samandehi} width={64} height={64} alt="ساماندهی" />
            <Image src={enamad} width={64} height={64} alt="ای‌نماد" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center lg:text-right justify-between text-sm">
          <div>
            <h3 className="font-bold leading-[3rem] ">پردیس کتاب</h3>
            <ul className="flex flex-col justify-around">
              <li className="my-2">درباره ما</li>
              <li className="my-2">تماس با ما</li>
              <li className="my-2">وبلاگ</li>
              <li className="my-2">سوالات متداول</li>
              <li className="my-2">فرصت‌های شغلی</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold leading-[3rem]">کتاب‌های پیشنهادی</h3>
            <ul className="flex flex-col justify-around">
              <li className="my-2">ملت عشق</li>
              <li className="my-2">ما چگونه ما شدیم؟</li>
              <li className="my-2">غرب چگونه غرب شد؟</li>
              <li className="my-2">تسلی‌بخشی‌های فلسفه</li>
              <li className="my-2">نیمه تاریک وجود</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold leading-[3rem]">دسته‌بندی‌های پیشنهادی</h3>
            <ul className="flex flex-col justify-around">
              <li className="my-2">فلسفه و منطق</li>
              <li className="my-2">سبک زندگی </li>
              <li className="my-2">داستان و رمان</li>
              <li className="my-2">علوم انسانی</li>
              <li className="my-2">زندگی‌نامه و خاطرات</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold leading-[3rem]">وبلاگ پردیس کتاب</h3>
            <ul className="flex flex-col justify-around">
              <li className="my-2">رمان جدید</li>
              <li className="my-2">زندگی‌نامه و آثار سعدی</li>
              <li className="my-2">کتاب‌های اطلاعات عمومی</li>
              <li className="my-2">معرفی کتاب‌های مشابه ملت عشق</li>
              <li className="my-2">زندگی‌نامه و اشعار سهراب سپهری</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center py-3">
        <span className="text-[10px] hidden sm:block">
          © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه کتاب الکترونیک پردیس کتاب
          است.
        </span>
        <div className="flex gap-2">
          <Image
            src="/logos/facebook.svg"
            width={32}
            height={32}
            alt="فیس‌بوک"
            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <Image
            src="/logos/twitter.svg"
            width={32}
            height={32}
            alt="توئیتر"
            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <Image
            src="/logos/youtube.svg"
            width={32}
            height={32}
            alt="یوتیوب"
            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <Image
            src="/logos/telegram.svg"
            width={32}
            height={32}
            alt="تلگرام"
            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <Image
            src="/logos/instagram.svg"
            width={32}
            height={32}
            alt="اینستاگرام"
            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <Image
            src="/logos/linkedin.svg"
            width={32}
            height={32}
            alt="لینکدین"
            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
        </div>
        <span className="sm:hidden text-[10px] text-center">
          © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه کتاب الکترونیک پردیس کتاب
          است.
        </span>
      </div>
    </div>
  </footer>
);
export default Footer;
