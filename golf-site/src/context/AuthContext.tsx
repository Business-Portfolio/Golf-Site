'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

type AuthContextType = {
    user: User | null
    loading: boolean
    logout: () => Promise<void>
    getToken: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter()

    useEffect(() => {
        const supabase = createClient()

        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser()
            if (data.user && data.user.email) {
                setUser(data.user)
            }
            setLoading(false)
        }

        fetchUser()

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session?.user) {
                    setUser(session?.user)
                } else {
                    setUser(null)
                }
                setLoading(false)
            }
        )

        return () => {
            authListener?.subscription.unsubscribe();
        }
    }, [])

    const logout = async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        setUser(null)
        router.push('/')
    }

    const getToken = async () => {
        const supabase = createClient()
        const { data } = await supabase.auth.getSession()
        return data.session?.access_token || null
    }

    return (
        <AuthContext.Provider value={{ user, loading, logout, getToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}