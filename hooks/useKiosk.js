
import { useContext } from 'react'
import { KioskContext } from '../context/KioskContext'

export const useKiosk = () => useContext(KioskContext);