import Link from "next/link";

import { TextInput, Button } from "../../../components";

export default function Page() {
  return (
    <main className="w-full max-h-[100vh]">
      <section className="w-[90%] flex items-start justify-between mx-auto my-20 md:w-4/5">
        <div className="">
          <h1 className="text-6xl mb-4 font-semibold">
            Forgot your <br /> password?
          </h1>
          <p className="text-2xl my-3">
            If you don&apos;t have an account <br />
            you can <span className="text-primary"> register here</span>
          </p>
        </div>
        <div className="flex-grow h-full my-6">
          <form className="flex flex-col justify-end mx-auto gap-y-6 w-3/5">
            <TextInput
              placeholder="Enter your registered Email"
              inputType="email"
            />

            <div className="my-4">
              <Button primary text="Send instructions" />
            </div>
          </form>

          <Link href="/forgot-password">
            <p className="text-primary text-md text-right w-3/5 mx-auto">
              Didn&apos;t receive confirmation instructions?
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
