import {createRandomNumber} from "@/utils/number";

const games = [
  {
    id: 0,
    image: {url: new URL("@/images/mock/cover1.jpg", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover1.jpg", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover1.jpg", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["약시", "모험"],
      rating: "3.5 / 5.0",
      updatedDate: "2019.07.01",
      title: 'Slay the spire',
      grade: "all",
      price: 43000,
      description: "In a est a urna accumsan hendrerit. Aliquam lobortis dui et aliquam cursus. Nulla mattis congue mollis. Ut a pulvinar eros. Aliquam fringilla mi eget dolor feugiat, quis blandit purus tristique. Donec blandit metus eu mollis auctor. Pellentesque tempor lectus non imperdiet pharetra. Morbi accumsan fermentum eros, vitae accumsan sapien. Ut quis placerat risus, eu pharetra nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce fermentum dolor ac ornare fringilla. Curabitur porttitor quis velit et pulvinar. Maecenas mattis consequat libero ac rutrum."
    }
  },
  {
    id: 1,
    image: {url: new URL("@/images/mock/cover2.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover2.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "약시", "격투", "액션"],
      rating: "3.7 / 5.0",
      updatedDate: "2023.01.01",
      title: 'Tekken 7',
      grade: "15",
      price: 29700,
      description: "Mauris tincidunt accumsan ullamcorper. Sed pellentesque erat vitae auctor blandit. Nulla facilisi. Curabitur eu lacus id turpis scelerisque vulputate a non elit. Duis sit amet congue ante. Maecenas velit enim, pellentesque id nulla a, cursus suscipit tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam a augue imperdiet, suscipit lectus a, imperdiet quam."
    }
  },
  {
    id: 2,
    image: {url: new URL("@/images/mock/cover3.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover3.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover3.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover3.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover3.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover3.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "격투", "액션"],
      rating: "5.0 / 5.0",
      updatedDate: "2019.01.04",
      title: 'Tekken 7 - Rematch Edition',
      grade: "18",
      price: 51000,
      description: "Morbi aliquet dictum dolor, nec pretium leo fringilla non. Maecenas mollis nisl sed mi congue, at egestas nisi tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id elit et lectus lacinia efficitur. Etiam ac feugiat eros. Mauris vulputate tempus lacinia. Aenean turpis augue, pretium sed dolor in, convallis eleifend arcu. Phasellus vel sodales nisl."
    }
  },
  {
    id: 3,
    image: {url: new URL("@/images/mock/cover4.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover4.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover4.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover4.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover4.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "격투", "액션", "스토리"],
      rating: "1.5 / 5.0",
      updatedDate: "2021.05.12",
      title: 'Ace Combat 7',
      grade: "15",
      price: 23000,
      description: "Etiam consectetur dictum ex et vestibulum. Mauris non ultrices elit. Nullam molestie ante nec suscipit imperdiet. In commodo placerat tellus et viverra. Suspendisse tincidunt orci metus. Donec iaculis eget nibh eget vestibulum. Quisque eu justo sed elit posuere commodo. Donec sed metus nec erat mattis ultricies. Curabitur hendrerit turpis neque, vitae sodales enim venenatis eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi egestas at purus in sagittis."
    }
  },
  {
    id: 4,
    image: {url: new URL("@/images/mock/cover5.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover5.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover5.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover5.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover5.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover5.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "약시", "액션", "스토리"],
      rating: "3.0 / 5.0",
      updatedDate: "2022.11.11",
      title: 'Tomb Raider',
      grade: "all",
      price: 120000,
      description: "Praesent porta, ipsum vitae sodales varius, ipsum ipsum pulvinar odio, in tristique neque metus quis orci. Aliquam erat volutpat. Pellentesque placerat erat et fringilla lacinia. Quisque gravida felis accumsan quam fringilla, et dictum mi mollis. Proin elementum dictum ligula, vel tristique lacus hendrerit rhoncus. Fusce in fermentum quam. Duis accumsan pellentesque nulla, rhoncus commodo tortor tincidunt vel. Fusce dictum erat eu tortor euismod lobortis. Maecenas mollis ornare ex id egestas. Ut molestie libero velit, vel dictum ligula dignissim sed. Proin in feugiat tellus, eget maximus dui. Nullam rhoncus porta dolor, in congue augue cursus non. Nunc ac bibendum ex. Pellentesque sit amet pellentesque ligula, a iaculis risus."
    }
  },
  {
    id: 5,
    image: {url: new URL("@/images/mock/cover6.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover6.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover6.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "약시", "스토리"],
      rating: "4.5 / 5.0",
      updatedDate: "2009.01.03",
      title: 'Atlas - Black wood',
      grade: "15",
      price: 4800,
      description: "Sed ornare, sapien ac dignissim facilisis, leo libero mattis leo, vel mollis neque turpis vitae urna. Etiam pretium, nunc vitae iaculis venenatis, nisi est scelerisque dui, vitae finibus massa neque ut magna. Cras finibus arcu eget turpis hendrerit, nec posuere ex lobortis. Fusce eget pharetra tortor. Aenean sit amet mi sollicitudin, dictum velit id, dapibus felis. Fusce molestie tristique justo, et dignissim mauris cursus sit amet. Nam varius id mauris ac malesuada. Quisque mattis eget mi porttitor condimentum. Sed imperdiet imperdiet eleifend. Cras at velit id est tincidunt lacinia nec ultrices lectus. Cras sed ultrices ex. Nulla placerat facilisis urna id pharetra. Nunc eget nisl in felis condimentum aliquet non non neque."
    }
  },
  {
    id: 6,
    image: {url: new URL("@/images/mock/cover7.jpg", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover7.jpg", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "약시", "오픈월드"],
      rating: "4.0 / 5.0",
      updatedDate: "2023.07.11",
      title: 'Monster Hunter',
      grade: "18",
      price: 115500,
      description: "Morbi pharetra eros cursus leo eleifend, ac blandit tellus pharetra. Nam sed lorem volutpat, pretium libero sed, porttitor sem. Aliquam diam magna, sollicitudin id sodales in, viverra condimentum leo. In facilisis lacus blandit, rutrum tellus id, viverra arcu. Nullam condimentum justo vulputate lorem vehicula, commodo congue justo sagittis. Integer facilisis sem facilisis eros finibus porta. Nam quis facilisis odio. Phasellus finibus lectus augue, vitae scelerisque magna euismod et. Pellentesque bibendum ac velit quis viverra. Quisque id ipsum id leo dignissim aliquet. Pellentesque volutpat arcu at aliquam vestibulum."
    }
  },
  {
    id: 7,
    image: {url: new URL("@/images/mock/cover8.jpg", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover8.jpg", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "약시", "mmorpg"],
      rating: "4.5 / 5.0",
      updatedDate: "2021.01.11",
      title: 'ARK - survival evolved',
      grade: "18",
      price: 9000,
      description: "Curabitur id blandit velit, vel volutpat dolor. Curabitur sed nibh id tortor blandit auctor. Fusce suscipit viverra mollis. Ut sed enim mauris. Aenean commodo iaculis libero, maximus accumsan nulla pulvinar sit amet. In at commodo leo. Curabitur aliquet cursus magna at sodales."

    }
  },
  {
    id: 8,
    image: {url: new URL("@/images/mock/cover9.jpg", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover9.jpg", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "약시", "전략 시뮬레이션"],
      rating: "1.5 / 5.0",
      updatedDate: "2021.04.14",
      title: 'Dota - under lords',
      grade: "all",
      price: 183600,
      description: "Phasellus eu faucibus felis, quis bibendum quam. Nulla commodo sem justo. Sed a ultricies purus. Fusce pretium erat quis risus ultricies fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultricies, lorem mollis pellentesque malesuada, nunc magna luctus nisi, ac fermentum massa lorem in magna. Curabitur non urna quam. Etiam ac dapibus dui. Donec scelerisque magna id ullamcorper fringilla. Ut aliquam id est vitae vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra luctus porttitor."
    }
  },
  {
    id: 9,
    image: {url: new URL("@/images/mock/cover10.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover10.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover10.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover10.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "약시", "시뮬레이션"],
      rating: "2.5 / 5.0",
      updatedDate: "2023.11.03",
      title: 'Destiny - Broken House',
      grade: "15",
      price: 210000,
      description: "Quisque dui velit, luctus nec rhoncus et, pellentesque eu ex. Donec nec justo at tortor suscipit viverra. Donec bibendum lacus eu imperdiet volutpat. Donec sagittis, quam malesuada eleifend facilisis, mauris risus imperdiet augue, sed dignissim purus ante eu nulla. Donec quis imperdiet sem. Maecenas bibendum mi quis mi porttitor aliquam. Fusce vulputate diam sit amet venenatis commodo. Pellentesque in vulputate diam, eget pharetra risus. Donec at purus viverra, congue erat a, tincidunt dui. Aenean tincidunt aliquam libero et pharetra. Vivamus at diam id lectus porttitor maximus quis tristique nunc. Praesent vehicula, purus a lacinia tristique, purus ligula vulputate tellus, in hendrerit justo mauris ac urna. Vivamus et dignissim libero. Proin ante libero, fermentum vel tincidunt congue, lobortis auctor ligula."
    }
  },
  {
    id: 10,
    image: {url: new URL("@/images/mock/cover11.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover11.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover11.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover11.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover11.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "스포츠", "시뮬레이션"],
      rating: "1.5 / 5.0",
      updatedDate: "2021.01.21",
      title: 'Football Manager 2009',
      grade: "all",
      price: 23000,
      description: "Etiam efficitur quam vel scelerisque auctor. Proin pellentesque urna diam, in convallis orci vulputate in. Cras ac tellus semper, pellentesque ligula quis, ultrices nisl. Integer dignissim lobortis ex, eu venenatis est vestibulum mattis. Suspendisse auctor eros in nisl iaculis, ac vulputate neque laoreet. Nulla et commodo sapien. Cras maximus accumsan feugiat. Quisque ut ultricies urna."
    }
  },
  {
    id: 11,
    image: {url: new URL("@/images/mock/cover12.png", import.meta.url), alt: "mock cover image"},
    thumbnails: [
      {url: new URL("@/images/mock/cover12.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover12.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover12.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover12.png", import.meta.url), alt: "mock cover image"},
      {url: new URL("@/images/mock/cover12.png", import.meta.url), alt: "mock cover image"},
    ],
    info: {
      tags: ["사시", "스포츠", "공포"],
      rating: "4.5 / 5.0",
      updatedDate: "2012.12.21",
      title: 'Dead by daylight',
      grade: "18",
      price: 120000,
      description: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc varius semper enim, quis facilisis enim viverra ac. Integer eget lectus felis. Vestibulum id sapien tempus, sollicitudin tortor quis, congue purus. Phasellus ac mattis sapien, quis posuere velit. Quisque at elementum sem. Sed faucibus leo quis ligula lobortis imperdiet. Nullam varius nisi quis diam pellentesque, eget commodo libero varius. Duis a posuere elit."
    }
  }
]

function createRecommends() {
  const titles = ['인기 컨텐츠', '최신 업로드', '에디터 추천'];
  let cursorStart = 0;
  return titles.map(title => {
    const cursorEnd = cursorStart + createRandomNumber(9);
    const data = games.slice(cursorStart, cursorEnd);
    cursorStart = cursorEnd;
    return {title, data};
  })
}

function createRandomGames() {
  const cursorStart = createRandomNumber(games.length)
  const cursorEnd = createRandomNumber(games.length, cursorStart);
  return games.slice(cursorStart, cursorEnd);
}

function createLibrary() {
  return createRandomGames().map(v => {
    const hour = createRandomNumber(12);
    const minute = createRandomNumber(60);
    v.playTime = hour * 3600 + minute * 60;
    return v;
  })
}

const recommends = createRecommends();
const randomGames = createRandomGames();

const MockGames = {games, recommends, randomGames, createLibrary}

export default MockGames
