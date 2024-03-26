import { useQuery } from "@tanstack/react-query"
import { getBilling } from "../../services/apiBillings"
import { useEffect, useState } from "react"

export function useBilling(){
  
  return {isLoading, billingData, error, status}
}