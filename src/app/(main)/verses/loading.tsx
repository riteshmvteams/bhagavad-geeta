import Skelton from "@/components/ui/skelton";

export default function loading() {
  return (
    <main className="p-10">
      <section className="container">
        <div className="flex flex-col gap-10 items-center">
          <Skelton className="h-8 w-96" />
          <div className="w-full flex flex-col gap-1.5">
            <Skelton className="h-3 w-full" />
            <Skelton className="h-3 w-full" />
            <Skelton className="h-3 w-2/3" />
            <Skelton className="h-3 w-full" />
            <Skelton className="h-3 w-full" />
            <Skelton className="h-3 w-1/2" />
          </div>
          <ul className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text-3xl font-lexend -mb-3">
              Translation:
            </h2>
            {Array.from({ length: 10 })?.map((_, ind) => {
              return (
                <li key={ind}>
                  <Skelton className="w-full h-20" />
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text-3xl font-lexend -mb-3">
              Commentories:
            </h2>
            {Array.from({ length: 10 })?.map((_, ind) => {
              return (
                <li key={ind}>
                  <Skelton className="w-full h-20" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
