import {
  ArrowRight,
  CircleDot,
  Mail,
  Radio,
  Sparkles,
  UsersRound
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { HeroVisual, NetworkVisual } from "@/components/Visuals";
import {
  marketLayerCards,
  participationCards,
  principles
} from "@/lib/content";

export default function Home() {
  return (
    <main id="top" className="noise min-h-screen overflow-hidden bg-void text-white">
      <SmoothScroll />
      <Nav />

      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8">
        <HeroVisual />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <Reveal>
            <div className="mb-10 flex justify-center">
              <Logo className="scale-110" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mb-5 w-fit rounded-full border border-aqua/25 bg-aqua/[0.075] px-4 py-2 text-xs uppercase tracking-[0.32em] text-aqua/90 shadow-[0_0_24px_rgba(125,229,62,0.08)]">
              The market for what matters.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <h1 className="text-balance mx-auto max-w-6xl font-display text-5xl font-medium leading-[0.9] text-white sm:text-7xl lg:text-[6.6rem]">
              <span className="block">A marketplace where</span>
              <span className="block">we don&apos;t just trade value</span>
              <span className="block text-aqua">&mdash; we create it.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
              CauseTrade is building toward a new kind of cause-driven
              marketplace where participation, attention, and capital can help
              create momentum around the issues shaping our future.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm uppercase tracking-[0.22em] text-white/44 sm:text-base sm:tracking-[0.18em]">
              Not charity. Not traditional finance. Not social media activism.
              Something new is forming between them.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#join"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-aqua px-6 text-sm font-medium text-void shadow-[0_12px_34px_rgba(125,229,62,0.22)] transition hover:bg-moss focus:outline-none focus:ring-2 focus:ring-aqua/70"
              >
                Join the early circle
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#missing-market"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-aqua/20 bg-[rgba(125,229,62,0.05)] px-6 text-sm font-medium text-white/86 backdrop-blur-xl transition hover:border-aqua/40 hover:bg-[rgba(125,229,62,0.08)] hover:text-white focus:outline-none focus:ring-2 focus:ring-aqua/60"
              >
                Read the signal
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="missing-market"
        className="relative px-5 py-28 sm:px-8 lg:py-36"
      >
        <div className="gold-hairline absolute left-1/2 top-0 h-px w-[78vw] -translate-x-1/2" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.26em] text-aurum">
              The missing market
            </p>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight text-white sm:text-6xl">
              The world has markets for almost everything &mdash; except its
              future.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="space-y-7 text-lg leading-9 text-white/68">
              <p className="text-white/78">Markets coordinate more than money.</p>
              <p>
                But the causes shaping our collective future still rely on
                fragmented donations, short-lived campaigns, and moments of
                public attention that fade too quickly.
              </p>
              <p>
                Climate resilience. Medical research. Poverty reduction. Animal
                welfare. Open science. Human rights. Local communities.
              </p>
              <p>
                These causes do not only need funding.
                <br />
                They need durable participation.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-4 md:grid-cols-4">
          {principles.map((item, index) => (
            <Reveal key={item} delay={index * 0.07}>
              <div className="glass min-h-36 rounded-lg p-6">
                <CircleDot className="mb-8 h-5 w-5 text-aqua" />
                <p className="font-display text-lg leading-7 text-white/88">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-4xl text-center font-display text-2xl leading-tight text-aurum sm:text-4xl">
            This missing market will not stay missing.
          </p>
        </Reveal>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(125,229,62,.1),transparent_30rem),radial-gradient(circle_at_78%_60%,rgba(200,164,93,.08),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <NetworkVisual />
          </Reveal>
          <div>
            <Reveal>
              <p className="mb-5 text-sm uppercase tracking-[0.26em] text-aqua">
                Between categories
              </p>
              <h2 className="text-balance font-display text-4xl font-medium leading-tight sm:text-6xl">
                Not donation. Not speculation. Something new.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-7 max-w-2xl space-y-6 text-lg leading-8 text-white/64">
                <p>
                  Donations matter, but they often end at the moment of giving.
                </p>
                <p>
                  Speculation is powerful, but too often disconnected from
                  real-world value.
                </p>
                <p>
                  CauseTrade is exploring the space between them, a place where
                  support can become visible, participation can compound, and
                  causes can build momentum over time.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {participationCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.06}>
                  <div className="glass rounded-lg p-6">
                    <h3 className="font-display text-xl text-white">{card.title}</h3>
                    <p className="mt-4 leading-7 text-white/61">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="question" className="relative px-5 py-28 sm:px-8 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(125,229,62,.08),transparent_24rem),radial-gradient(circle_at_50%_75%,rgba(200,164,93,.08),transparent_28rem)]" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="glass overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-aurum">
                The question
              </p>
              <h2 className="mx-auto max-w-4xl font-display text-4xl font-medium leading-tight text-white sm:text-6xl">
                What if causes could gather market force?
              </h2>
              <div className="mx-auto mt-12 grid max-w-4xl gap-5 text-balance font-display text-2xl leading-tight text-white/72 sm:text-3xl">
                <p>What makes a cause valuable?</p>
                <p>Who decides which problems deserve attention?</p>
                <p>Can public belief become measurable?</p>
                <p>Can participation become more durable than outrage?</p>
                <p>
                  Can financial activity help create real-world momentum instead
                  of only private gain?
                </p>
              </div>
              <p className="mx-auto mt-12 max-w-3xl text-lg leading-8 text-white/60">
                CauseTrade does not begin with all the answers.
              </p>
              <p className="mx-auto mt-4 max-w-3xl font-display text-2xl leading-tight text-aqua sm:text-3xl">
                It begins with a question the future cannot avoid.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="early-circle" className="px-5 py-28 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-5 text-sm uppercase tracking-[0.26em] text-aurum">
                Early circle
              </p>
              <h2 className="text-balance font-display text-4xl font-medium leading-tight sm:text-6xl">
                For people who can recognize something before it becomes obvious.
              </h2>
              <p className="mt-7 text-lg leading-9 text-white/66">
                CauseTrade is early by design.
              </p>
              <p className="mt-6 text-lg leading-9 text-white/66">
                The first circle is for people who are willing to think before
                the category is fully named.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/64">
                {[
                  "Builders",
                  "Traders",
                  "Researchers",
                  "Donors",
                  "Cause leaders",
                  "Students",
                  "Skeptics"
                ].map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-lg leading-9 text-white/66">
                People who believe markets can be redesigned before they are
                dismissed.
              </p>
              <p className="mt-6 text-lg leading-9 text-white/78">
                The first people will not just watch CauseTrade develop.
                <br />
                They will help shape what this market becomes.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[
              {
                icon: UsersRound,
                title: "Founding circle",
                body: "A first layer of people who can recognize the shape of the category before the rest of the market does."
              },
              {
                icon: Mail,
                title: "Quiet signals",
                body: "Selective updates for people following what is forming, without noise, urgency, or performance."
              },
              {
                icon: Radio,
                title: "Category builders",
                body: "The earliest participants will help pressure-test the language, boundaries, and expectations around CauseTrade."
              }
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="glass rounded-lg p-7">
                  <item.icon className="h-6 w-6 text-aqua" />
                  <h3 className="mt-8 font-display text-2xl">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="market-layer" className="relative px-5 py-28 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="mb-5 text-sm uppercase tracking-[0.26em] text-aqua">
                  Market layer
                </p>
                <h2 className="text-balance font-display text-4xl font-medium leading-tight sm:text-6xl">
                  A new market layer for causes.
                </h2>
              </div>
              <p className="max-w-md leading-8 text-white/60">
                Direction matters before mechanics become obvious. These are the
                contours of the category CauseTrade is moving toward.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {marketLayerCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="group glass min-h-52 rounded-lg p-6 transition hover:border-aqua/28 hover:bg-white/[0.045]">
                  <span className="font-display text-sm text-aurum/85">
                    0{index + 1}
                  </span>
                  <h3 className="mt-7 font-display text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/62">{item.body}</p>
                  <span className="mt-8 block h-px w-full bg-gradient-to-r from-aqua/45 to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="px-5 py-28 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.26em] text-aurum">
              Join
            </p>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight sm:text-6xl">
              Be early to the market for what matters.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-9 text-white/64">
              <p>CauseTrade is still forming.</p>
              <p>
                The mechanics are being shaped.
                <br />
                The first causes are being studied.
                <br />
                The community is beginning.
              </p>
              <p>
                Some marketplaces are obvious only after they exist.
              </p>
              <p className="text-white/76">This one should not have taken so long.</p>
            </div>
            <p className="mt-10 font-display text-2xl text-aqua">Leave a signal.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/58">
              <span className="rounded-full border border-white/10 px-4 py-2">
                contact@causetrade.com
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Early circle forming
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Quiet updates ahead
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <form className="glass rounded-lg p-6 sm:p-8">
              <div className="grid gap-4">
                <p className="text-sm uppercase tracking-[0.24em] text-white/46">
                  Leave a signal.
                </p>
                <label className="grid gap-2 text-sm text-white/62">
                  Name
                  <input
                    className="h-12 rounded-md border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-aqua/45"
                    placeholder="Your name"
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/62">
                  Email
                  <input
                    className="h-12 rounded-md border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-aqua/45"
                    placeholder="you@example.com"
                    type="email"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/62">
                  Signal
                  <textarea
                    className="min-h-32 resize-none rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-aqua/45"
                    placeholder="Tell us why CauseTrade caught your attention."
                  />
                </label>
                <button
                  className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-aqua px-6 text-sm font-medium text-void transition hover:bg-moss focus:outline-none focus:ring-2 focus:ring-aqua/70"
                  type="button"
                >
                  Send Signal
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-5 text-sm text-white/54">
            <a href="#missing-market" className="transition hover:text-white">
              The Missing Market
            </a>
            <a href="#question" className="transition hover:text-white">
              The Question
            </a>
            <a href="#early-circle" className="transition hover:text-white">
              Early Circle
            </a>
            <a href="#market-layer" className="transition hover:text-white">
              Market Layer
            </a>
            <a href="#join" className="transition hover:text-white">
              Join
            </a>
          </div>
          <p className="max-w-md text-xs leading-6 text-white/38">
            CauseTrade is an early exploratory concept. Nothing on this page is
            an offer, solicitation, exchange, financial product, or investment
            advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
