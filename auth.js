import { supabase } from "./supabase.js"

export async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  
  const currentPage = window.location.pathname.split('/').pop()
  
  const publicPages = [
    'index.html',
    'login.html',
    'register.html',
    'about.html',
    'how-it-works.html',
    'Performer.html',
    'rewards.html',
    'help.html',
    'earn.html'
  ]
  
  if (!session && !publicPages.includes(currentPage)) {
    window.location.href = "login.html"
  }
  
  if (session && (currentPage === "login.html" || currentPage === "register.html")) {
    window.location.href = "dashboard.html"
  }
}

export async function getUser() {
  const { data } = await supabase.auth.getUser()
  return data.user
}

export async function logout() {
  await supabase.auth.signOut()
  window.location.href = "login.html"
}