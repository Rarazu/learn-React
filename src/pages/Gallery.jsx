export default function Gallery() {
    return (
        <section class="overflow-hidden text-gray-700">
            <div className="flex justify-center">
                <a className="block p-3 max-w-sm bg-pink-200 rounded-lg border border-gray-200 shadow-md hover:bg-pink-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Galeri Adiwiyata
                    </h5>
                </a>
            </div>
            <div class="container lg:pt-24 lg:px-32">
                <div class="flex flex-wrap m-2 md:-m-10">
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://sdn4mt.files.wordpress.com/2010/10/102_1801.jpg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://disk.mediaindonesia.com/thumbs/1800x1200/news/2020/10/79eee6e2d0f1fecaf997c3dc135453a4.jpg" />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://i0.wp.com/smpn14tangsel.sch.id/wp-content/uploads/2021/03/Limbah.jpeg?resize=1024%2C644&ssl=1" />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-full p-1/2 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://sdnglagahsari1.sch.id/media_library/posts/large/311633ccb2db0085aae813274890ee86.jpeg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZPUOd2SncIDBgnRtxTp5sMskBl-i7MA3nA&usqp=CAU" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://kalsel.kemenag.go.id/files/fotoberita/338062.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}