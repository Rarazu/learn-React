export default function Picture() {
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="row-span-2...">
                <a className="flex flex-col items-center bg-white rounded-lg border shadow-md 
                md:flex-row md:max-w-xl hover:bg-pink-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-pink-700">

                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://cdn.antaranews.com/cache/800x533/2019/07/22/BA951851-15F4-4AD9-8347-9ABFDC964B41.jpeg" alt="" />

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Pemanfaatan Sampah
                        </h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Upaya daur ulang sampah menjadi prakarya bermanfaat. Bertujuan untuk mengurangi
                            pencemaran sekaligus sebagai media pengajaran.
                        </p>
                    </div>
                </a>
            </div>
            <div className="col-span-2 row-span-2...">
                <a className="flex flex-col items-center bg-white rounded-lg border shadow-md 
                md:flex-row md:max-w-xl hover:bg-teal-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://newberkeley.files.wordpress.com/2015/12/pemilahan-sampah.jpg?w=640" alt="" />

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Pemilahan Sampah
                        </h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Dibuat tong sampah terpisah (organik dan anorganik)dan diletakkan berdampingan. Bertujuan untuk
                            memudahkan proses pemilahan dan daur ulang.
                        </p>
                    </div>
                </a>
            </div>
            <div className="col-span-2 row-span-2...">
                <a className="flex flex-col items-center bg-white rounded-lg border shadow-md 
                md:flex-row md:max-w-xl hover:bg-teal-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://mediacenter.serdangbedagaikab.go.id/wp-content/uploads/2017/08/Photo-Bersama-2-678x381.jpg" alt="" />

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Mengoleksi Karya Daur Ulang
                        </h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Membuat Galeri atau lemari pajangan berisikan karya-karya siswa dari daur ulang sampah. Bertujuan sebagai wadah berkembangnya
                            siswa dan menumbuhkan semangat adiwiyata.
                        </p>
                    </div>
                </a>
            </div>
            <div className="row-span-2...">
                <a className="flex flex-col items-center bg-white rounded-lg border shadow-md 
                md:flex-row md:max-w-xl hover:bg-pink-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://smpn1baturetno.sch.id/wp-content/uploads/2020/08/berita1-4-3-1600x900.jpg" alt="" />

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Kampanye Lingkungan
                        </h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Informasi tentang isu isu lingkungan melalui spanduk atau mading sekolah. Bertujuan untuk menanamkan kepada
                            siswa rasa peduli dan kesadaran lingkungan.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}