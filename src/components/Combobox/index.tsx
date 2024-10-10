import './styles.scss'

import { useEffect, useRef, useState } from 'react'

import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import { useTheme } from '@/hooks/ThemeContext'

interface Option {
  label: string
  value: string
}

interface ComboboxProps {
  selectedOption: Option
  options: Option[]
}

export const Combobox: React.FC<ComboboxProps> = ({ selectedOption, options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const [selected, setSelected] = useState<Option>(selectedOption)
  const dropdownRef = useRef<HTMLUListElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const { theme } = useTheme()

  const toggleDropdown = () => setIsOpen(!isOpen)

  function handleSelect(option: Option) {
    setSelected(option)
    setIsOpen(false)
    buttonRef.current?.focus()
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex(prevIndex => (prevIndex + 1) % options.length)
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex(prevIndex => (prevIndex - 1 + options.length) % options.length)
    } else if (event.key === 'Enter') {
      handleSelect(options[highlightedIndex])
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  function handleLiKeyDown(event: React.KeyboardEvent<HTMLLIElement>, index: number) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setHighlightedIndex(prevIndex => (prevIndex + 1) % options.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedIndex(prevIndex => (prevIndex - 1 + options.length) % options.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      handleSelect(options[index])
    } else if (event.key === 'Escape') {
      setIsOpen(false)
      buttonRef.current?.focus()
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const activeOption = document.getElementById(`option-${highlightedIndex}`)
      activeOption?.focus()
    }
  }, [isOpen, highlightedIndex])

  return (
    <div className="combobox" aria-expanded={isOpen} aria-haspopup="listbox">
      <button
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className={`combobox__button combobox__button__${theme}`}
        aria-controls="combobox-list"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Combobox selection"
      >
        <img src={selected.value} alt={selected.label} className="combobox__avatar" />
        <span>{selected.label}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <ul
          className={`combobox__dropdown combobox__dropdown__${theme}`}
          role="listbox"
          id="combobox-list"
          ref={dropdownRef}
          aria-activedescendant={`option-${highlightedIndex}`}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${index}`}
              className={`combobox__item combobox__item__${theme} ${
                highlightedIndex === index ? 'combobox__item--highlighted' : ''
              }`}
              onClick={() => handleSelect(option)}
              onKeyDown={event => handleLiKeyDown(event, index)}
              role="option"
              aria-selected={selected.value === option.value}
              tabIndex={highlightedIndex === index ? 0 : -1}
            >
              <img src={option.value} alt={option.label} className="combobox__avatar" />
              <span className="combobox__item-label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
