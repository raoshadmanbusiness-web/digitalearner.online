import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"

const supabaseUrl = "https://yqxbwgxfhibbdkgglydw.supabase.co"
const supabaseKey = "sb_publishable_2yjmy16CcD7Vtn5ydaYkfw_b4CJyz2V"
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkAuthAndRedirect() {
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
  
  if (session) {
    console.log("User logged in:", session.user.email)
    
    if (currentPage === 'login.html' || currentPage === 'register.html') {
      window.location.href = 'dashboard.html'
    }
  } else {
    console.log("No user logged in")
    
    if (!publicPages.includes(currentPage)) {
      window.location.href = 'index.html'
    }
  }
}

checkAuthAndRedirect()

supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth event:", event)
  
  if (event === 'SIGNED_IN') {
    window.location.href = 'dashboard.html'
  } else if (event === 'SIGNED_OUT') {
    const currentPage = window.location.pathname.split('/').pop()
    if (!['index.html', 'login.html', 'register.html'].includes(currentPage)) {
      window.location.href = 'index.html'
    }
  }
})