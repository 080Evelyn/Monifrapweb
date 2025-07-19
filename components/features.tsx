import Image from "next/image";

const Features = () => {
  return (
    <section
      id="features"
      className="md:mx-10 lg:mx-25 rounded-lg p-5 mt-10 text-center"
    >
      <div className="text-[10px] inline-block font-medium text-primary border border-primary rounded-full px-2 py-1">
        Features
      </div>
      <h1 className="text-3xl md:text-[40px] font-medium">
        Explore the Features That Make Monifrap the Smartest Way to Bank
      </h1>

      <div className="grid gap-6 mt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col text-start p-1 feature-border-gradient">
            <Image
              src="/images/feature-1.svg"
              alt="feature"
              width={100}
              height={100}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Instant Transfers
              </h3>
              <p className="text-xs text-[#101e72]/60">
                Send and receive money instantly between linked accounts. No
                delays, just fast and reliable real-time transfers
              </p>
            </div>
          </div>
          <div className="flex flex-col text-start p-1 feature-border-gradient">
            <Image
              src="/images/feature-2.svg"
              alt="feature"
              width={100}
              height={100}
              className="w-full h-full"
            />
            <div className="p-4">
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Secure Bank Integration
              </h3>
              <p className="text-xs text-[#101e72]/60">
                Your data is protected with bank-level encryption and security.
                Log in with biometrics for safe, seamless access anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-9">
          <div className="flex flex-col md:col-span-5 text-start p-1 feature-border-gradient">
            <Image
              src="/images/feature-3.svg"
              alt="feature"
              width={100}
              height={100}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Connect Multiple Banks
              </h3>
              <p className="text-xs text-[#101e72]/60">
                Easily connect your local bank account in just a few taps. Fast,
                secure, and designed for seamless integration.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:col-span-4 text-start p-1 feature-border-gradient">
            <Image
              src="/images/feature-4.svg"
              alt="feature"
              width={100}
              height={100}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Get Streamline Accountability
              </h3>
              <p className="text-xs text-[#101e72]/60">
                View all your linked bank accounts in one place.Track every
                transaction with real-time notifications and a unified history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
