export interface AirtableRecord {
  title: string;
  description: string;
  tags: string[];
  siteLink: string;
  githubLink: string;
  image: [ImageProps]
}

interface ImageProps {
	id: string,
	width: number,
	height: number,
	url: string,
	filename:string,
	type:string,
	thumbnails: Thumbnails
}

 interface Thumbnails {
	 small: {
		 url:string,
		 width: number,
		 height: number
	 },
	 large: {
		 url:string,
		 width: number,
		 height: number
	 },
	 full: {
		  url:string,
		 width: number,
		 height: number
	 }
 }