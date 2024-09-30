import AcmeLogo from "@/assets/logo-acme.png";
import ApexLogo from "@/assets/logo-apex.png";
import EcoLogo from "@/assets/logo-echo.png";
import CeleLogo from "@/assets/logo-celestial.png";
import PluxLogo from "@/assets/logo-pulse.png";
import QuanLogo from "@/assets/logo-quantum.png";
import Image from "next/image";

export default function LogoTicker() {
  return (
    <section className=" py-20 md:py-24">
      <div className="container">
        <div className="flex items-center">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {[AcmeLogo, ApexLogo, CeleLogo, EcoLogo, PluxLogo, QuanLogo].map(
                (logo) => (
                  <Image
                    key={logo.src}
                    src={logo}
                    alt="Logos"
                    className="h-6 w-auto"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
