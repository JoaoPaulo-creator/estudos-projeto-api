import { Category } from '../../models/Category'

interface BodyRequestProps {
  icon: string
  name: any
}

export async function createCaregory(request: BodyRequestProps) {
  try {
    const { icon, name } = request
    const category = await Category.create({ icon, name })
    return { category }
  } catch (error) {
    console.error(error)
    return { error: 'Erro ao tentar cadastrar categoria' }
  }
}
