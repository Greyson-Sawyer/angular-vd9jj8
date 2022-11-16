import { Injectable } from '@angular/core';

export interface Page {
  title: string;
  shotBy: string;
  creatorLink: string;
  videoSrc: string;
  videoType: string;
  images: string[];
  backgroundColor: string;
}

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  pages: Page[] = [
    {
      title: 'Midnight Noon',
      shotBy: '@AndrewGSalama',
      creatorLink: 'https://www.instagram.com/andrewgsalama/',
      videoSrc:
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2FMidnight%20Noon%20-%20Banner.mov?alt=media&token=33d5c7e0-838d-454a-b0c3-0ad5616a40b0',
      videoType: 'video/mp4',
      images: [
        // 'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.16.1_1.16.1.jpg?alt=media&token=79208df9-7a63-4f59-b388-3a22bd399a4a',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.34.1_1.34.1.jpg?alt=media&token=de197198-f4ef-4095-bc38-76ba292b32e7',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.35.1_1.35.1.jpg?alt=media&token=54a8a3f2-0e4e-441f-a0e2-70ca1b5a8f56',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.42.2_1.42.2.jpg?alt=media&token=e0acde0c-5043-4662-8d93-47473914b420',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.46.1_1.46.1.jpg?alt=media&token=717378a1-5432-4dce-a922-120df44977ef',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.56.1_1.56.1.jpg?alt=media&token=f53fc181-ee6f-4508-8bac-14e4ba71c881',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.65.2_1.65.2.jpg?alt=media&token=330bc863-1ca6-4e62-9e0e-b644d8777b3f',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.89.2_1.89.2.jpg?alt=media&token=61dc8e3e-15bb-4998-ac7d-88f9621ef929',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.108.1_1.108.1.jpg?alt=media&token=da0a6e44-fb37-4675-b676-830aa4ca61b7',

        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.149.1_1.149.1.jpg?alt=media&token=cb41b266-5210-4738-8d4e-80c735a74ba4',
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/Midnight%20Noon%2F1.155.1_1.155.1.jpg?alt=media&token=abb84d61-a87f-423a-ace7-e29237985903',
      ],
      backgroundColor: 'rgb(42,40,35)',
    },
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
      backgroundColor: 'rgb(67, 0, 6)',
    },
  ];
  constructor() {}
}
