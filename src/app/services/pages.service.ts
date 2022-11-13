import { Injectable } from '@angular/core';

export interface Page {
  title: string;
  shotBy: string;
  creatorLink: string;
  videoSrc: string;
  videoType: string;
  images: string[];
}

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  pages: Page[] = [
    {
      title: 'Emma',
      shotBy: '@AndrewGSalama',
      creatorLink: 'https://www.instagram.com/andrewgsalama/',
      videoSrc:
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_v23.mp4?alt=media&token=43c35544-67ec-4537-bb50-4cadabc3cfba',
      videoType: 'video/mp4',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.4.1.jpg?alt=media&token=92d9d6e6-0730-4834-af89-2f708350d08a',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.11.1.jpg?alt=media&token=61c0158d-98d1-4cc2-be0c-1486e4a7bc69',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.13.2.jpg?alt=media&token=a5c31b4e-5705-4253-8074-60a7c42b42a8',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.14.4.jpg?alt=media&token=f42954d7-b8e6-484e-89cb-058469737b5a',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.18.2.jpg?alt=media&token=493d582f-31e7-440b-9a5b-988db8d0aa54',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.22.2.jpg?alt=media&token=e8344edb-1553-480f-8cbd-8c2e63366be8',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.27.2.jpg?alt=media&token=bfb2d244-256d-41b3-88f4-3a58665848ff',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.28.1.jpg?alt=media&token=b3693d56-3774-4e92-9f9a-33d089c216a3',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.34.5.jpg?alt=media&token=22010783-4829-49ae-a3a7-938c0831eb89',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_1.34.2.jpg?alt=media&token=1c0eb3c8-b98c-42b3-8119-b54d34ffd851',
      ],
    },
    {
      title: 'Emma',
      shotBy: '@AndrewGSalama',
      creatorLink: 'https://www.instagram.com/andrewgsalama/',
      videoSrc:
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_v23.mp4?alt=media&token=43c35544-67ec-4537-bb50-4cadabc3cfba',
      videoType: 'video/mp4',
      images: [
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
      ],
    },
  ];
  constructor() {}
}
