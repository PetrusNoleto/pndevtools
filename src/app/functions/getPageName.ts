'use client'


export function getPageName(){
    const pagename = location.pathname.split('/')
    return pagename[2]
}