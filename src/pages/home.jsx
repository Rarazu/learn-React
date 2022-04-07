export default function Home() {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3 ...">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-pink-200 ">
            <img className="rounded-t-lg" src="http://dlh.salatiga.go.id/wp-content/uploads/2020/09/Adiwiyata.png" alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Istilah Adiwiyata
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Kata ADIWIYATA berasal dari Bahasa Sansekerta yaitu dari kata ADI yang berarti besar,
              agung, baik, ideal atau sempurna dan kata WIYATA yang berarti tempat dimana seseorang
              mendapatkan ilmu pengetahuan, norma dan etika. Sedangkan ADIWIYATA artinya tempat yang besar,
              agung, baik dan indah yang dimana tempat itu digunakan oleh seseorang untuk mendapatkan ilmu
              pengetahuan, norma dan etika.
            </p>
            <a href="https://id.wikipedia.org/wiki/Adiwiyata" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="row-span-2 col-span-2 ...">
        <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-teal-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pengertian Adiwiyata
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu
            pengetahuan dan berbagai norma serta etika yang dapat menjadi dasar manusia menuju terciptanya
            kesejahteraan hidup untuk cita-cita pembangunan berkelanjutan. Adiwiyata merupakan nama program
            pendidikan lingkungan hidup
          </p>
        </a>
      </div>

      <div className="col-span-2 ...">
        <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-pink-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tujuan Adiwiyata
          </h5>
          <ul className="list-disc">
            <li>
              <u>Tujuan Umum :</u> membentuk sekolah peduli dan berbudaya lingkungan yang mampu berpartisipasi
              dan melaksanakan upaya pelestarian lingkungan
              dan pembangunan berkelanjutan bagi kepentingan generasi sekarang maupun yang akan datang.
            </li>
            <li>
              <u>Tujuan Khusus : </u> mewujudkan warga sekolah yang bertanggung jawab dalam upaya perlindungan
              dan pengelolaan lingkungan melalui
              tata kelola sekolah yang baik untuk mendukung pembangunan berkelanjutan
            </li>
          </ul>
        </a>
      </div>

      <div className="row-span-2 col-span-2 ...">
        <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-teal-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Prinsip Dasar Adiwiyata
          </h5>
          <ol className="list-decimal">
            <li>
              <b>Edukatif</b>, prinsip ini mendidik programer Adiwiyata untuk mengedepankan nilai-nilai pendidikan dan pembangunan karakter
              peserta didik agar mencintai lingkungan hidup, baik lingkungan dalam sekolah, di rumah dan di masyarakat luas.
            </li>
            <li>
              <b>Partisipatif</b>, komunitas sekolah harus terlibat dalam manajemen sekolah yang meliputi
              keseluruhan proses perencanaan, pelaksanaan dan evaluasi sesuai tanggungjawab dan peran.
              Partisipatif ini juga merupakan sebuah sikap yang harus dituntujukkan kepada lingkungan sekitar
              sekolah dari komite sampai pemerintahan setempat, harus dilibatkan,
              agar pelestarian lingkungan hidup dari sekolah bisa berdampak ke lingkungan sekitar.
            </li>
            <li>
              <b>Berkelanjutan</b>, seluruh kegiatan harus dilakukan secara terencana
              dan terus menerus secara komprehensif/berkesinambungan.
            </li>
          </ol>
        </a>
      </div>

    </div>
  )
}
