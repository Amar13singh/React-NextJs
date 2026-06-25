import Image from "next/image";
import PhotoGalleryTracker from "./PhotoGalleryTracker";

type Photo = {
    id: string;
    author: string;
    download_url: string;
};

export default async function Page() {
    'use cache'
    const response = await fetch("https://picsum.photos/v2/list?page=1&limit=20");

    if (!response.ok) {
        throw new Error("Failed to fetch photos");
    }

    const photos: Photo[] = await response.json();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            <PhotoGalleryTracker />
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className="rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={photo.download_url}
                        alt={photo.author}
                        width={500}
                        height={350}
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-4">
                        <h2 className="font-semibold text-center">{photo.author}</h2>
                        <p className="text-sm text-gray-500 text-center"> Album ID: {photo.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

