const Banner = () => {
    return (
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find your career path
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                assumenda? Deleniti quasi inventore, libero reiciendis minima
                aliquid tempora. Obcaecati, autem.
              </p>

            </div>

            <div className="w-full mx-auto">
              <div className="widget border border-black w-full lg:w-[500px] lg:max-w-2xl p-5 sm:px-8 md:px-10">
                <div className="stat flex items-center justify-center gap-4">
                  <article className="flex-1 flex items-end justify-between p-5">
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-gray-100 p-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>

                      <div>
                        <p className="text-2xl font-medium text-gray-900">
                          $240.94
                        </p>
                        <p className="text-sm text-gray-500">Profit</p>
                      </div>
                    </div>
                  </article>

                  <article className="flex-1 flex items-end justify-between p-5">
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-gray-100 p-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>

                      <div>
                        <p className="text-2xl font-medium text-gray-900">
                          $240.94
                        </p>
                        <p className="text-sm text-gray-500">Profit</p>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <a className="btn-outline block" href="/">
                    Share
                  </a>

                  <a className="btn" href="/">
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Banner;