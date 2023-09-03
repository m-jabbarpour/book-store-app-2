import Image from "next/image";

const SwiperLg: React.FC = () => {
  return (
    <div className="bg-neutral-100 dark:bg-slate-950">
      <div className="container py-8 ">
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src="https://cdn.fidibo.com/phoenixpub/images/flex/general/46851922-2807-4901-af58-f2689e8838b5.jpg?width=1950"
            alt="book-store"
            width={1164}
            height={242}
            className="md:hidden"
          />
          <Image
            src="https://cdn.fidibo.com/phoenixpub/images/flex/general/94ccd835-ad28-4d4a-a66b-324fcf51044f.jpg?width=6600"
            alt="book-store"
            width={1164}
            height={242}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default SwiperLg;
