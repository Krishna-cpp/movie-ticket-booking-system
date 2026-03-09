import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

private movies = [

{
id:1,
title:'Inception',
genre:'Sci-Fi',
duration:148,
rating:8.8,
poster:'https://m.media-amazon.com/images/I/71uKM+LdgFL._AC_SL1000_.jpg',
description:'A thief who steals secrets through dream-sharing technology is given a chance at redemption by planting an idea into a target’s subconscious.'
},

{
id:2,
title:'Interstellar',
genre:'Sci-Fi / Drama',
duration:169,
rating:8.6,
poster:'https://imgs.search.brave.com/BmobvXg7Us1dm69-Y08gv8x3t7kVcT8vGNeSaWJ-_Nw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL21v/dmllcy9pbWFnZXMv/ZXh0cmEvdmVydGlj/YWxfbG9nby9tb2Jp/bGUvdGh1bWJuYWls/L3h4bGFyZ2UvaW50/ZXJzdGVsbGFyLWV0/MDAwMTkwNjYtMTkt/MDItMjAyMS0wMi0y/NS0xMi5qcGc',
description:'A group of astronauts travel through a wormhole in search of a new home for humanity as Earth becomes uninhabitable.'
},

{
id:3,
title:'Eternal Sunshine of the Spotless Mind',
genre:'Romance / Drama',
duration:108,
rating:8.3,
poster:'https://imgs.search.brave.com/DkZrck-ui3JFQ8HnxDe8YpDfHU8JrGbqgb8NsjheOUM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YXByb3h5LnR2dHJv/cGVzLm9yZy93aWR0/aC8xMjAwL2h0dHBz/Oi8vc3RhdGljLnR2/dHJvcGVzLm9yZy9w/bXdpa2kvcHViL2lt/YWdlcy9ldGVybmFs/X3N1bnNoaW5lX3Bv/c3Rlci5KUEc',
description:'After a painful breakup, a couple undergoes a procedure to erase each other from their memories, only to rediscover their connection.'
},

{
id:4,
title:'500 Days of Summer',
genre:'Romance / Comedy',
duration:95,
rating:7.7,
poster:'https://imgs.search.brave.com/uXrUMCuTstPNB8uKgP6IJ39sm1A4qylc_oYVxxRmUIo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjErZXNrSmFoWUwu/anBn',
description:'A nonlinear story about a man reflecting on the 500 days he spent falling in love with a woman who didn’t believe in love.'
},

{
id:5,
title:'La La Land',
genre:'Romance / Musical',
duration:128,
rating:8.0,
poster:'https://imgs.search.brave.com/WVOgcJ14SMw6TFMDHHlBe-8kayTy84ZY_9LcDNImTXE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8zMzMv/NTAxL0hELXdhbGxw/YXBlci1sYS1sYS1s/YW5kLTIwMTYtbW92/aWUtcG9zdGVyLXRo/dW1ibmFpbC5qcGc',
description:'A jazz pianist and an aspiring actress pursue their dreams in Los Angeles while struggling to maintain their relationship.'
},

{
id:6,
title:'The Truman Show',
genre:'Drama / Sci-Fi',
duration:103,
rating:8.2,
poster:'https://imgs.search.brave.com/yKf1YkrT1cNx5SLZuAoZblb1mRKvfotZ__5DoCMSxsY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I0LzQ5/LzhkL2I0NDk4ZDY2/ZjU2OTUzYWNhYWQy/N2JhMWVlMDU0MTRl/LmpwZw',
description:'An insurance salesman slowly discovers that his entire life is actually a reality TV show broadcast to the world.'
}

];

  selectedSeats: string[] = [];

  getMovies() {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

  setSelectedSeats(seats: string[]) {
    this.selectedSeats = seats;
  }

  getSelectedSeats() {
    return this.selectedSeats;
  }

}
