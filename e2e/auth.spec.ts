import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('should show login page', async ({ page }) => {
    await page.goto('/auth/login')
    
    await expect(page.getByRole('heading', { name: 'Sign in to your account' }))
      .toBeVisible()
    
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByLabel('Password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible()
  })

  test('should show validation errors', async ({ page }) => {
    await page.goto('/auth/login')
    
    // Try to submit without filling in fields
    await page.getByRole('button', { name: 'Sign Up' }).click()
    
    // Check for required field validation
    await expect(page.getByLabel('Email')).toHaveAttribute('required', '')
    await expect(page.getByLabel('Password')).toHaveAttribute('required', '')
  })
})
