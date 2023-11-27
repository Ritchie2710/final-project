import Image from "next/image";
import Link from "next/link";

export default function aboutme() {
  return (
    <main>
      <Link href="/hobbies"> My Hobbies</Link>

      <h1>Little about ME</h1>
      <figure>
        <img
          className="w-24 h-20 md:w-40 md:h-auto md:rounded-xl rounded-full mx-auto "
          src="/images/me.jpg"
          alt="pic of me"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <p className="text-sky-500 dark:text-q-400">
            My name is Richard or Ritchie I am 37 years old. I was born in
            Scotland but moved to Norwich when I was less than a year old
            because of my my dad work. I have done alot in my life including
            travelljng across america over a month driving and flying some of
            it. Walked up mountains, volcanos and glaciers. I was a teacher for
            15 years in schools and colleges teaching sport and public services.
          </p>
        </div>
        <img
          className="w-24 h-40 md:w-40 md:h-auto md:rounded-xl rounded-full mx-auto "
          src="/images/hotel.jpg"
          alt="lego"
        />
      </figure>

      <figure className="md:flex bg-slate-100 rounded-xl bg-violet-600">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="./"
          alt=""
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <p className="text-sky-100 dark:text-q-400">
            I was diagnosed with diabeties when I was 5 just after my birthday.
            5 years ago I found out I had kidney failure with only 9% function
            overall in both kidneys. they disrupted my rugby work and life
            style. I was put on the transplant list and on dialaysis which meant
            i had to pump warm fluid in and out of my body for 5 months before I
            got the call that a transplant had come available, and on the 6th of
            Feburary 2019 I had a kidney and pancreas double transplant. Which
            means I no longer have diabeties and I dont have kidney failure.
            Recently diagnosed with ASD and ADHD which can sometimes affect me
            as a person.
          </p>
        </div>
      </figure>

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-green-500">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="./"
          alt=""
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <p className="text-sky-950 dark:text-q-400">
            I played rugby from a young age at 9 years old I was played at
            Norwich rugby club. When I turned 15 years old I was playing for
            Leicster academy going back and forth to norwich every week for
            training and games was very tiring. At 19 I was picked to play for
            Harlquins academy while studying at university in london.
          </p>
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto "
            src="/images/rugby1.jpg"
            alt="rugby"
          />
        </div>
      </figure>

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-stone-600">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="./"
          alt=""
        />
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto "
          src="/images/italian-food.jpg"
          alt="food"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <p className="text-sky-500 dark:text-q-400">
            Favourite things about me. Food - Italian, Roast, bbq, mince, mash
            and gravy colour - Aqua Blue music - a bit of everything movie - I
            mean can you pick one top few would be Lord of the rings, Star wars
            Gladiator, Jurassic park, Breakfast club and John Wick.
          </p>
        </div>
      </figure>
    </main>
  );
}
