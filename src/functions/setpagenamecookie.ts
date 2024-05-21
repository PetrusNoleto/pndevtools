"use server"
import { cookies } from "next/headers"

export const setPageNameDetailsCookie = (pagename:string)=>{
    cookies().set(`page${pagename}details`, 'lee')
    return 0
}
