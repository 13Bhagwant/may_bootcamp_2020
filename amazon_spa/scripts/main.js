const BASE_URL = "http://localhost:3000/api/v1"

// Requests

const Product = {
  index() {
    return fetch(`${BASE_URL}/products`)
      .then(res => res.json())
  },
  show(id) {
    return fetch(`${BASE_URL}/products/${id}`)
      .then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/products`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    .then(res => res.json())
  },
}

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(res => res.json())
  }
}

document.addEventListener('DOMContentLoaded', function() {
  Session.create({
    email: 'js@winterfell.gov',
    password: 'supersecret',
  })
  .then(res => console.log(res))

  Product
    .index()
    .then(products => {
      renderProductsIndex(products)
      navigateTo('home')
    })

  const productsContainer = document.getElementById('product-index')
  productsContainer.addEventListener('click', function(e) {
    e.preventDefault()
    const button = e.target.closest('button')
    const productId = button.dataset.id

    Product
      .show(productId)
      .then(product => {
        renderProductShow(product)
        navigateTo('product-show')
      })
  })

  const navbar = document.querySelector('nav.nav-fill')
  navbar.addEventListener('click', function(e) {
    e.preventDefault()

    navbar
      .querySelectorAll('a.nav-link')
      .forEach(link => link.classList.remove('active'))

    const navLink = e.target
    navLink.classList.add('active')
    
    const page = navLink.dataset.target
    navigateTo(page)
  })

  const newProductForm = document.querySelector('form#new-product-form')
  newProductForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const formData = new FormData(newProductForm)
    const params = {
      title: formData.get('title'),
      description: formData.get('description'),
      price: formData.get('price'),
    }

    Product
      .create(params)
      .then(product => {
        newProductForm.reset()
        return Promise.all([Product.index(), Product.show(product.id)])
      })
      .then(array => {
        const [ products, product ] = array

        // const [ a, b ] = [1, 3]
        // const a = 1
        // const b = 3
        renderProductShow(product)
        renderProductsIndex(products)
        navigateTo('product-show')
        // navigateTo('product-show')
        // return Product.index()
      })
  })
})

function navigateTo(id) {
  if (!id) return
  document
    .querySelectorAll('.page')
    .forEach(node => node.classList.remove('active'))

  document.querySelector(`.page#${id}`).classList.add('active')
}

function renderProductsIndex(products) {
  const productsContainer = document.getElementById('product-index')
  const productsList = products
    .sort((p1, p2) => p2.id - p1.id)
    .map(p => {
      return `
        <button class="list-group-item list-group-item-action" data-id="${p.id}">
          <span class="font-weight-bolder">${p.id}</span>
          ${p.title}
        </button>
      `
    })
    .join("")

  productsContainer.innerHTML = `<h2 class="mt-4">All Products</h2>` + productsList
}

function renderProductShow(product) {
  const productShowContainer = document.getElementById('product-show')
  const emptyStar = `<i class="far fa-star"></i>`
  const filledStar = `<i class="fas fa-star"></i>`

  const productShowHTML = `
    <div class="jumbotron">
      <h2 class="display-6 d-flex justify-content-between">${product.title}
        <span class="badge badge-pill badge-success">
          $${product.price}
        </span>
      </h2>
      <p class="lead">${product.description}</p>
      <p class="text-muted mb-0">Sold by: ${product.seller.full_name}</p>
      <p class="text-muted">Hits: ${product.hit_count}</p>
      <hr class="my-4">  
      <h3>Reviews:</h3>
      <div class="list-group">
        ${product.reviews.map(review => {
          return `
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">
                  ${filledStar.repeat(review.rating) + emptyStar.repeat(5 - review.rating)}
                </h5>
                <small>${review.author_full_name}</small>
              </div>
              <p>${review.body}</p>
            </a>
          `
        }).join("")}
      </div>
    </div>
  `

  productShowContainer.innerHTML = productShowHTML
}