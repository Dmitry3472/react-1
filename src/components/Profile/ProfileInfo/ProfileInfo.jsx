import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUZGRgZHB8ZHBwZHB4cHxocHhwcGhwcGhwcJC4lHh4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD8QAAIBAgQDBQUGBQIGAwAAAAECEQAhAxIxQQRRYQUicYGRMlKhsdEGE0LB4fAUFWJykjOiI1OCssLxFkPS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwQF/8QAKBEAAgIBBAICAQQDAAAAAAAAAAECERIDITFBE1EEYaEygZHBFCJC/9oADAMBAAIRAxEAPwDrOJ4UIJzggkiIINAYUPiMct4fv602E9e2KdbnzZSV7DkU2WtXgMNbk+p0A+tXOz8HDDyYIibiwrMtSjcYN1uc+BUlXpXQcfxCMYZQQNNjA2qthcUiaIJmb6RtQptrg1ik+TNHBsVzBTExMb0HG4UqYKkeIroMLjTzXKLiefQVYQDGBYrIH4rCaz5JLk141LhnHtgUN+HI2ruVw8PDCoFXOdJgmar8biILPlYi+mlK13fAPRVbs4t+FIAJUgHSRr4VXfBrqOJxUxD8ItaqXEcAACcwsNK6x1fZxlor/k55kqBWtHEwqrth13UjzOLRUiolasnDqLJTYblYrTFaMVqBWmwyAlagVo5WmK02NlcrTFaOVqBWmysAVqOWjlaYrVZFcimIo5SolabICVqJWjFaiVqKwJWolaMVpiKBUiuVpiKMy0NhUaUgUUqlSoGz0n+Gk2qY4JhsfSt/gmRFFpabki/lT8RxRYiwivnPVd0ketaUatmUmHCi96KqKF/EW+Aq0UWAchg9aKcVRZVI2mKzlZtRSMZpP61Z7N4QOxzTAv49KtOgO9zyHwqXB44w5kEn97VqUm1sEYq9y7/C4CGSBPWhYnaGEndEAAzbnVbi+MDrF/nWYOHU3LkeVc1Fvk6OVfpLy4hxGzDqLnztNVOK4NySSpPgZomB7imRryoOLxRU2vHO1binexiTVblIcBiQWjKB71vnVXELaE1pY2LiOLtC8p/Ks98Mgka12i32cJJL9NlczQ2WrJwzyqDIa6pnJoqlagwqyVqBSmzDiVWSolKtFKgUrWRhxKpFRIqyVqDJSmZaK5Wo5aOVqBFNgCK1ErRitRK1WNgStQK0crUSKbKwRWoFaKRUSKrEEVqBFGIqDCmyBMKEwozCoMKLFActPU8tKorPYIFIoKKcLlUfu+tfJs+pTB5aYjrTlTtUWmlAOsjQ1BwTremzUvvK1uVoG2HQmwqs/eDkaTLInQTF+dNsqTKOQjQxQnwzV1ov3hahsLTtzrSbMuKKkGoMtWGqJU8qcgpFaKG61bbCPI+lDbDPI0qQOJUZKGUq2cOkOHJ0FbzMYFdeGJEirvD9jyAzsFB23P60F+GiZItyv5WpiHa2Y+ulZcm+GaUUuUC43hUDhEJnS5qWL2UEUl3AO1AdMrSD3gdabicV39ozFauW1Mw1He0UsRBNjI50IrVlkoZWuqkcJQAEVAijnDpfd1rIw4lYrTFaufwj+6fQ76VDisMKco2F6FJXROEkrKZWoFaMVqLLW7MgSKgwojCoNVYgyKgRRSKiU6VZDQKlRMnSlVkWJ6c2ITvHgf1phiNzrjlGIumM/mx/M1I8Ri/89vUV4vF9np869M7IYp6UjjAakedq4r+KxP8Ann/IVVfhsxktJ3JaT50rR9sn8n0jvzjDmt9NPhT5xvXnv8GOYqymLiKMq4rgbCW9BU9FdMl8n2juHxBaBved6zu1O2sNIR8RUOmW7HzVQY865v7/ABf+a/q35VSPZwN9+oPzNS00uWT+RfCOpw+PTFbu4qORsGv6cqLi9rYS+3i4Yy7ZhPoLmuN/li+6Kj/K05DyFbwi+zK1mujdxftjw6sMqOwm7BQPMAmT8Kjx/wBt8NbYatiGOqKOkkTPl51gN2cvu/Cgt2cvKrxRYf5LRbxvt5jmYRANvaOXxuJ8bVm8V9reJcyHVB/Qo+bSal/LF2A9KiezF5CtqEUT+QnzZMfa7id2TzXXxirvD/bRv/swwRzQwf8AE/UVmns4bGons4cqnBEteP2dfwXb+A/s4gBP4W7p8p18pq+cSvPW7OHu0XDR0EK7qBsGYAeWlHjRedHbYo5H86r4vGontui/3ECfU1yOIMQ3bEc+Ln5G1VDwQkn8x+VOALWido/auEdMXDv/AFr9amMbMJmRtBkVwx4Hxp8PhchlWZT/AEmKVAnqxfZ3BedqZcSDpXH4eJiKZGK89Tm+BkUhi42bN988+Ij/AB0+FWIZr2dm3HPEBreFVGJYydegrnP4vH/5h/xX6Uhx3EDR/wDav0pUa4Byy5ZvOhG1DKmsRuOx/fB/6RS/mGP7y/4/rWjNR9mwUpsnOsY9o4/NP8T9aY9o4/8AR/ifrUKS9o2GQVAtHWsg9pY/JP8AE/8A6qJ7RxvdT0b61k1X2jXn+mlWN/McX3cP0P1pqaRU/aPQDw8GDgY1v6D+WnnVfEx8NT3kceKxax0jqPWu2wXxkTPfEDEsIae7fKSzRllQpIiJMW1rAw+18YYmVziLmQhFKl3Jzd14HPl01mK8im2dpwjGrfP0Yj8ZgqYhpFiMoBB6il/McCJyv4wPnNa7cVjBWzYb/eMUBLIjAmJytbuk95TIMDSZFVT25hohR0wyhEJkXN3RcBswBJBJ9qASSZ5ayfr8nFquWl+xQftTBBjI8jYgCPG9QXtTD2R/h85q3h8RgO6lEDFCsZlC+8sKqBs2zREkk3MCiYeAuNiF1wkGZYctKos6uqaK2UNAk8zrU5pcoFGcuGv4KH88w4/02PWR9KTdup7jf5A1vcPwCqmIxRVJ0Q5VChrIGnWJaZ1y2sQa53tHsnIECpd2s8kookouYqI7xvmOvIXojKLZThqxV3+Bv56nuN8DTntnC9xvQfWh8RwKK9lyo/8Apkn2xNmue7OYa2EXrK4p0zGFJ2mdYkA+EZfjXRUzjKU48s1x2xhe63oPyNJ+08H+r0/WsJhAUwYa/wASIuNdDbmKaV3n9+VVGPLLs2j2phnQsP8Ap/WoHjsPmf8AGsgBeZ9KiCKSepI2TxWH73+01E8Vhe98DWOee1KBVkwyka54nD9/4H6UzcXhc/8AafpWPNImrIlJmoeJw59r/aaZ+Jw+Z9DWUG8acv8Au1WTG2XjjpsfgaRxU974H6Vnl6QanNhbLrPh+8fQ0wdNm9QfpVHNT5jVmx3NAMnvj9+NLue+vqKzi3SmmrNlRpDDHMfCn+5rMLDlUZpzI02welCbANUc/j61Ev4+tWYpF44JqBwiKpFj1pmneaszdFzJ4etNVKlRmVHtvD8PxGHYgvY5VtGaCZJJubgWsAOYtDA7CVWXExmdit1VisswltbBVme7PoLVocJxmKT3lAVVO8lmvGn4QIvbQ0NOIBZXxDmZVYgKIGo7wXdjoOQrxWz6mMdv7Gx8F2wWyIEBynvHLKg5mlQJB1U6EwDvAzex/s4krnIYobFe6oUyVFxJJLHpaLxWu/BYuLJdjhgkQEN8ojWdJ+FutXTwcJkTuKAQDrcggGARpr6cqsmtjXjjJ21wUmTBwxlRVDOckgBdc0AHYKB6C16g/D4aJCgQh7yxGYEd1donMN7ZjO9Vhg5GC4gzZFsTHeuV6wDm8vvGG1OBd2BIL6kbsQVUg+9Bd+gyDlQV/QDjsdfuCcRQWRlzKCxH3rEKqqQJKhSDoTBG9cdxeIqrj4qGQ7AJMAAS8tGU2kGII9nyrq+K4F3YYeEsIqlxAFn7yIQJsBnz9CF5VFfscAcIlxCMMywcpWBIW9pg3jVjpW4tI8+rCcnsjl8RAWHcaMNCjCBlkkSqqxkPLzNzmdRAiKy+1UCuUAEoFVyCTmfLcz+EySCswcp00HoHDdi4gIGUKzu+I7LBVDmL+ct93a3+nXFP2Owc4bEk5zpdnIJExre5vrPWukZI8mtpyiltyUOGcAFXlka5ECQFBK5WOkmRpVZsCGIj2TDCxFjFmFjffS9dD/CAEpiB1CuoEgiQWvN9AAdDq2tVeL4cK/8Aw0IUPF4ZiQfaEQetiK0pnBwdbmSuEVBa40uOuk9PpUVwwZnkQI57anet/hex3fuLhk5DLPka6j8MqL8udA7S7FfDE5SFAgk87kgxMHmNrCnPcnpzxvoy+H4F2FgSOd9efKYnXnS4jgWQTIYcwQeXI9a3/s9wTMSYcLBJYAFQQpObKbkiRYRrG9tTtPsSBIusM2gUBNbibMDGuhrL1KdG1oylHJHBlBtTDDtPL9861+I7MYTlUxrImw1v5CRzHWwP2B2SuLihHz5ZIJW2+87Vpzo5xhJyUTJXs5iMwuLaA6Np8wI60LG4Qq2Ui8T5RPyr1bE+z+EME4YQKQy3E5iZJG5tPX5Vlv2BhYjYjMr5lXMLEAyJiNwCSIHI1haqZ6pfEmuGebZLUmw/KtztHslkGfKQrEKCLAtYkRew7widhetHB+xzuiv94gLFe6JNov3hYtppuTW80cI6c26SOQKHnSZOtdrj/YRwLYiki0X18h4WrD4r7PY6NlZDpMiIiJvJtY0KafAy09SO7Ri5OZNIrRHSKjlNasxbIFaYijMhmIvyplwyxhQTaTHLnRZJ2Nh8MzWAvE/v5Ul4YkZjAEa+HONKsglZUHKFY5mE7wNtp0gUPH4pSXABIYQpMLuDmIW0zPrVZtFfGTKef59etRKW1vJkeA/90zGwi4oi8Rlgr7a2BsQBe0Hx+NVmgP3fWlTZuvxNKmy3PVcDtkAQ/eA1gz4C1X8HttLEAKIMlh3jyjX51xA7UZD3Ei83AJ9SDHlUP4/FIJcwP6jfyBvHUCuL0z1LWaO7ftl3YZFlZgbSbXI5b1q8bxBXDAJiwkzbrfevLeF7efDdDIhWuvvDcEi8V0HE/a1MRY+5eZgQRHXX5msSg0zrHWTTtnS9mozmS8IDveRFhfa5rdTDRRFoGk7dZrzHB+1eIDAVVQbak6wAbeZrUT7WAcOJT/iGxEkz1k6Dx+NDizcdaCO0HaKDNcAKJN+Vc7j/AGhGdgSTe0bZTMfOuBx+1MZ3YkhZ1AmPCDtReCYu3fYLrDHTSb3pwo4z+TJ7RR2WL2+4BCx3bct76c551Y7P7SRR98QC7yJIvAvrykmuI4Lills7BQLj8RP7gVZfj0bKqTbU/hEm0dTTiZWs+Wdpi9oozIWAYWN733+NaH8fhe0VWRoSB8K5XhuBRVScQF3sFnSR01I/KjcZg/dhMNmWZzRYtE6kcja56czWGkehT2to6XH7VAABhZJvpAF9qJgYyONe7lAI2vrauRxszBmB9povoov66jlW+SEwo2ZTcC5sIgA8ooaNRnk/o2eDw0VYRVUGTCgeZqtxTYSCCAAR6xYSd9q5/h+MZbA7jrbT9+dVvtD2hAQAm9z5SPOqnZS1IqNmnxnE4ZRkVVE6gCOgMDpRex+EwVAN8yw2wBnoNa47D4xmfMdTMnyMTaiN2iyixg5RHpW6dUcVqwbyaPQuIx1IBXUNbqQDPzrnuIJAd2Jl2y+C6gDlaB5Vh8N2swJBJICkLsSSBeBfagHtWVI6zcb2mhRo09eMlZ1GCi5ATBFjlNxY9d6Lw/FJCoABlkwPAAR+9q5sdrHJcQLgR0O3mKp/zCHBDEQZsdQNRTTB60Ud1i8UAvdOpJ18LfAVk8TxOdWDH2tJO06fvlWMnaB5EiLnrEjLG/61F2LKzANbwgcgfj8KlEXqqS2K+J2IjN3Ce9rcCLj6VudlfZJIzyywbDY6GecbVj8NxUEAiI1Ppb9862P/AJOAhAaSoMcvA0ty6OUI6S3kB7R+z+GHCqJB/ESDeDJM9Y0rluJ4X7ouxEMbQoGWZUkkE6C4ir2P2y7XIM61TbtNmXIyhgDIEc9yedajfZx1XpveOxiYpM6DNpppMRruaoOhmD6corVx8M65d+W3hQsfh1ZQyiSNf2YrVnmUqZQYDaSdv3FqS4LQWPzg/rVocKzGQTbXn5UMpFyDyiI/91GlIrjBPu/A/SnqxlI/H8KVNjkdIeOUAiAoIFkWPVmOb41VcM+i23Ok/WmZmB/CvU3Y+E/nU0UkDMWPKTGvQH4T50G3uVH4NBuJ6A/P9aPgIbxJ+A9dKLiYygwBcbkz8NqcYjm826m3md/jU2y4KWM7pORAAZuINiOf0rN+9e8seZ3iugxEAAupk3J0HnHyHrWZx2AztCsCBykD5XpUkx37KJ4kAWkHx+f6UQ8YtmPmNp3MX+VS/ljRLGCdrVEdkOR3YPSn/UVQx7QB2tbQARAi176dKTcWq6MQD8utIdlMDBF9/nqaI/ZlpnTYCQPE2oeJWgg4tkIZHZTz0Omo3vRsDtNlMg5m95tm0kE3J8ao4fZrGbEEUj2c8cgdJtPhzodBZoNxTzOclpzMC1jFwCJvebeFafEfabHxWUs+VQB3FAVY10/elcuuAyGRYip4hI3Ol6MUaUmuGdPh/aAgMcoLGSJjKGIktzJ6W1rJ4ntJ3JZ9YmbiqfDSV59d6ZyReB9KKROTapmvhcSiZcznKQSxAViNbRryHnvFVeJ48liUELECYJmN+kg+tZT4oHlFQ4fGhoix+H1poK2Lz8figWdvGTNutaHY3GviOiM7M7GDImwJsOYjny5VQZQRVHOVuCQQbEWI9KqTBHofbnBYWEiC4JbnmsdABGto8utc9xPFIH+7XYnvczlUi+w1HlWG/HO/tuXgWzGYtbWY2tTF7gxMACNjzmIN7+tCVcmptN7I28HthlfKyqFEgzIa2txaRlmrTfabDXCYBTnYDqJBuCSJvz2npXMY7kmSdb+t96pcQ4ygc6cUMW1sjff7Sg937lSJ3LeECDbnQW7fWRGHAn3jMelc6XmoE1rFD40zqD9pkEgYQI55ot6GgD7QoJjBN+bzfmYUT4VzZNRJqxRrwxZ16fapD7eAGXkHykdQSDQH+0iEEDBIF/x7eaa9a5Y0wNGKNeGLOswvtHhiJwmMWMOBI/xofE9s4LNK4bgdXBP/AG1y4NHw8Mtpt4U4ow9GKN/+c4XuN6D60qxh2fibLPpSopGfDpnZYfdjKAWnWM0evdFDcFiczehufPYU2JjgMVQZiJEjQ9RrbqaZQYEkL0AknzNFmAgQAWUAczcnwG5qL450BI6nXxA1/PrTO4iSxj5/U+f0oJ7okqVzaExJHhrRY0EHUADqe8fE7U/3g8Pz8NSf3pTBixmOUDnytoKdAFJZp7pggWJPKarKgiJILEW8wD4CJ9bUU8RCjIIAkW32128uetVyjPvCye6De21rnxqT3VtFEi0kwOQ1H70rLFIgiF9bakKsAeZOnias4uWFAYNzN4HRQ3tHr86r4byZ2VY7ugJEC+2u0aVJ5sCQMoi15vra5tyqKiyqMsnUsYMkxPI2kn/ppMQXCD1ESRHeYttptoBzmocTKt3jERlXVrgaLos21qOI6gszAmGEgGe8RZSeVjbofCsjQLHIIAsA14Hp+zUk4dCLKsD2mIMaaZj4bCaFhoWVZXSbnfe5qy2KICiGI703gaDTQAUthRDhsNEaxMGdRv0F6JxmArTPdmYiPIaa2NCd4JIEn8RIm5P4TpHWiriRqc2m1uvjRb5KujIxOzrSL38/35UuG7KJvmy3i9q00JJCrFz69Dy0pcQV0k6WAtHMfnNayZYlb+Dga3mPGd6rcT2Y9wNZ5HetFIJBE2AA5DlffU0X7z2jNzcdI5UZNFiYOH2ewa+mnKtgdloNSZPI2mN7dRUuEAd5AjckmxPX970sfiSM5AEC0ixA5DepyYpdsyO1+EygETlNhN9LHwrIbDJNtK6xkDICwzgiYOumo5WqjxPCIokAX8RA09a1GRbrgxP4M6k0Zex2ZMysD0NvTnWriIMoAWRoQNROhE9aNhYYHcMWAgc50I6/SnIspHLPwjKSCDbWnw+EJNwQOcV0qaybCY2mdrUp1IFvDfz2pzLORj/yc6FotIJUwfAnWhDskzE6a2/dq33IIDGLGB+tGCqEltZI52I33gcvSjJlnL2c8vZQmLzyH5VZ4fgVUFgGMf29eYudLeNXBhHNOg2gk+l5oJxQGIYGN/Eb05NmXKT5GKPsfh+lKi/e88OevOmotgX0xQoiAByUSSfE/Og4jyRG/Mm/kLmk+GbnXKANbSfDUx5U+JigAZdTqdP2KjQsWRA3tcwD5DYUsFACSWEjlePEwaBgqXex6k6D1NXcVkVSqakWNue5/ShskIYpFxrtE286ghAWZgTqRcneJoakxbxLNp5DakEUkEmR8bfKgiONiZsusE91FPzOpP7tVnIIC6KJk7a3y6W8dYoZx2LQg6CBHkI9KHjYRmXYAjUA5o6CLTUQRXDFVAzKNAbKOu01IYwzFtTsRadrdPClw7FnGVLHQMbQvvaSPh40sFsrEA5jrItA6n51k0GXEyqX/GWiTsN8oO+l9tqjipCDQLcqCZmbA6a2p8qg94S7RE6STNzvQncswzQAgygc7k6fCggrOCqkklulkCgf9xPKg4jkgi2Q3gHUzv4U2LjdAJsAI7o5T+dH4UWCgAsbXmFAIk/rURACBlAJJ32kUTBXKgYnXXnHQcqETlnvyf6TYnxouECxgixEtuSfyqChLiASwgXGt/CANdaZ8Izm3IzXgCDaOvwpsZQpSRJ0IBnoJ5VPEZSo1Mb6TyjoNIosSKEnKgjeBP5neh4uKRIH6mfHSiLiEARIMHQbaRz1oDAsxIHWOQj4mkg/B2NzoM0bC+/Wm4k97KNdb66ctvCgI8rl5mfTmeXSj8Oklr6yQTfQSIn0qD6HhVCyZBHeA2nX8qG6B1YkSxvC6TqbetTCyCIuQSfQm/nB8KDmK94MLCJ59AIuKhK5N4A0tznx6xar0DSZyj1O0ddPKo4kBSU1JWC2uW8mBoM0ATyNNxCETfWSoBkAA+V/pTYUVcTUk6j2p506EGZJ6ga+nKiOpLEAS0WPSOmlulVmfKbeBPWkCa4kSsd07fu1F4dx7MgAiNJbnbfyHWoOoKWPeN4B1A38arYBYGQNDve9Q0E4sRAMgHQ7+PUVHjEkKxiwiSfavqB51aKKwYAxbM07E8j470HhyQCrAxNt8p3iZsRtSmFGdJ5x5H6UqtOFk6n/AKiPhSrVhQYPEyYHzqGFiXskncm9vlUHlog9BVqyg5jGXlcsTYDx89jUxDMMqwxAJv5DQBRVYYsyZM6CR8hQziFye6FGpJuTRcBsveiYnLPOs8GguKwVQAZMSbb/AL3p7kCTCj2ufhAoOHKqXN2mAOU3miom76ATHjpUQmeYMZVM5VibfvfpSxyBCyRABIEEnl0FCxHznPcCdBy0AHkI8qLjgKA5AkxlWTBtct06DWoiWJisYRRE7bmwMk7CdraUThN9AAb2gAcp3PSh4TuWzZrwTNtY/CNBz8qWDiKCWNwktGoLEgCSdf0rLIm7s7nLCrsxgBR5n4Cica3cUILAmWga213ixPnVPDwS7KB7JEszct/SrHEPqAuuaAYEAxlkbQoJ86BB8ORvdj7JgAA9dfhVg4RTvsSCe9Y6zzJN6FhMACWALLeBNo00PhTcSxcgkkg6A6Kfd6DkOUVAPhuCxy2EnQCTyE7TR3kKAp1EkDQHcGdarohzFFIEGY8r3qRfcTAtHUe0flQyCj2nNtJFtJOgk28aA2OHZQb7D10jTc1YDzGawZSwjbXWhZe4jKl8zZo1gZI8NWqEJhYZugPtQM3idPhQ8hL5AYysYPKNieVqtdloGx1cnuIS7RGklsvwiqT44DuQJk2ne8zbc61Lkq2Hx0yzsTePH8qPhI2W5IAHLfp5cqhxSmSSQSNoiBFGxnPeAsoUEW1BFxPnUVEcMS5fNDDvaR4kDeOVE4nDB7yCZAmdrA2tzm+9U+F4gZs3IGCb89anxOK6YpuflIiR0IqrcuifCtkVjeAbyNQToSbaxYRQHXv2vAsb6jWSNabhsclo5grHO2n0PSgjEgh5OpXwkakbjWmgDYbwjuT7XdUA3Bn8R2ETahFC2XubQT120t50P2QVywZmTsI1HjIq1guzBSTmkRlBIDC+p2ikipiLlZrgsvK0RrfSnVmLCBlBEmLeY6UDGwgTaTeCwgSDpmHOj8PxIEg+ypED+kWIN723tWjIXCwxmOQkqNSOl9DzihYGN3mcjyiJ9NYqfDqy5iLqRYgRNVkNwCd4McuvI1ESxIk2FPQ83JvhSqIIRlE2LESv9I5+NCSCNd7k/r40V8GACzZmN4nTe59KDikmAP0vSaCwBJi55UbC4UkG8CJJP5mmwyqKXYSZKqNiRqZ86gXdgFAJJvA+FBBc4y5RsfXr4UuDAz3uZuPrROF4Ny2WJMQeS/3HaNad+6HCNJJi1wonc6FzAsJ3oKmQxcQZguWQO8RpJ/q8oFQXEzSSM0EyTYAmwAAtaKljsigISWc3YjQG8An56a0ygsQAIANhsPWfU1EwuDMFyNLCbASDBM6723imw8OG7rZtBN9+m9AfiszNhD2C0zvIkT4XPrRFIQomsw8/3AFZHgR60EP95IdwYAAEDqemwANOqSC8arCx73h4TSWAWWQwZbKDfUHvHaIipJi5EKAg3mTphgj8JOrzF9r+NBAsMd67KBADEkawJA3Om1GQqDLA5CoaBqZMKV8/hUHwkElrkRINryRlIOvlUsQ5jAEaExM6aTreb+EaVEWUQn/iQA158MsCZ11jyqOFhqBEhsoPhJ1jmbHpahHCYKsSS141kyQLDlGlEw0zYT5QJDKDGzEn/aQI8hQJBsQKzZmBYqIHuzH4uccqtthDLc3IJAnQECw6EfKswlFcpGYgxmOlrGBy8auYby0veJv8h+lTInmH3ahJBvYb9f3yoX3RJJj8M7UHCOZgIgHlsDtVjDlUZtwQokDeZJnUwKuC5Gwnsxa+Rek3Mb7CahgYwAGYGHkEz1saGHv1OoN5qBMXNxNhyn5U0Qi4RgAo5Ec771pcRxCtt3jIPKIGWOQ2rNxAGFteu31omEhNjcyJB2A5fvapqyBJiQMoF8x9KmxJU2A3nW/K9Rzy+bYnfWNIPOpMkd4KSsx89aQBNjssMyBlYQwPIH+kyKIsKBlaw25X1qteSLa6j85q22FuouuvXl5GlkPiKy51jlAjUayNoNZyYdi0RPlWi4JVZG8iIEdCd5/LrFBZJLKxCxcDkeV9B8Kkyohwzh1yEe1p/cNPA9ar4eGx2tcG9x+dWeCADWUmxI2gx+lMXzAlrEzeN41mqyBZSNj8aVVo6j1I/OlWqCkEb2R4n50+HqPEUqVQk8ViYkzBt0vWjw1g8WttSpUS4JcobjmP3SX3PzNRwj3B0Zo6dw0qVZ6NlThfYPi3yWpKxyi+4/8AKlSpM9lZPa8jWpgf6h6ZY6WpUqmRUwfaXwb5mrPCe0viD5wb0qVD4LtC4cyL3vv4VZPtp/b/AOBpUqGRHAFsXxH/AJULs32cf+1f+4UqVHs0uCti/wCtif3N86tL7PkKVKtdIz2xJqviKWH7WL+/xUqVCIrj2j4H860+1LYTRa6m3ONaVKliuzOwN/D8xSwvaPgP+6lSqXIMnxH+of7/AKVJvYP9w/OlSoBlXF0P99S3TrAPUQLUqVaEKPYxP7f/ADSoLc3vMT1pUqCXAXH/AAdQZ62NVX9j1+dNSqIq0qVKkj//2Q=="
        alt="toplogo"
      />
      <div className={s.descritpionBlock}>
        <img src={props.profile.photos.large}></img>
        ava+discription
      </div>
    </div>
  );
};

export default ProfileInfo;
