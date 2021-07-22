import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from '@/layouts/Main'
import MintingForm from '@/components/pages/MintingForm'
import TransactionModal from '@/components/pages/TransactionModal'

const PageIndex = () => {
  return (
    <MainLayout>
      <Helmet title="Mint Cardano NFT Token Online" />
      <MintingForm />
      <TransactionModal />
    </MainLayout>
  )
}

export default PageIndex