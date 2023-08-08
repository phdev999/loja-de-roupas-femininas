export const sideBarSet= {
    open: () => {
       const aside= document.querySelector(".sideBar")
       aside.classList.add('open')
    },
    close: () => {
       const aside= document.querySelector(".sideBar")
       aside.classList.remove('open')
    },
}