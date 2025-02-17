import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// interface SingleLevelDropdownMenuProps {
//   buttonLabel: string;
//   items: {
//     title: string;
//     url?: string;
//     icon?: JSX.Element;
//     action?: () => void;
//   }[];
// }

// https://blog.logrocket.com/how-create-dropdown-menu-react/

export const SingleLevelDropdownMenu = ({ buttonLabel, items, styler }) => {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const navigate = useNavigate();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggle = () => {
    setOpen((prev) => {
      if (!prev) setFocusedIndex(null);
      return !prev;
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setFocusedIndex(0); // Focus on the first item when arrow is pressed
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    } else if (event.key === "Escape") {
      setOpen(false);
      setFocusedIndex(null); // Reset focus when dropdown closes
    }
  };

  const handleItemKeyDown = (event, index) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex < items.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : items.length - 1
      );
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const selectedItem = items[index];
      if (selectedItem.url) {
        navigate(selectedItem.url);
      } else if (selectedItem.action) {
        selectedItem.action();
      }
      setOpen(false);
      setFocusedIndex(null);
      buttonRef.current?.focus();
    } else if (event.key === "Escape") {
      setOpen(false);
      setFocusedIndex(null);
      buttonRef.current?.focus();
    }
  };

  useEffect(() => {
    const handler = (event) => {
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  useEffect(() => {
    if (open && focusedIndex !== -1) {
      const focusedItem = document.getElementById(
        `dropdown-item-${focusedIndex}`
      );
      focusedItem?.focus();
    }
  }, [focusedIndex, open]);

  return (
    <div className={styler} ref={menuRef}>
      <button
        ref={buttonRef}
        id="dropdown-button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="dropdown-menu"
        type="button"
        className="inline-flex items-center text-black hover:text-blue-500 justify-center"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}>
        {buttonLabel}
        <span className="ml-2">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {open && (
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-12">
          <ul
            role="menu"
            id="dropdown-menu"
            aria-labelledby="dropdown-button"
            className="w-56 h-auto md:shadow-md md:rounded-md md:border p-1 md:bg-white text-blue-500">
            {items.map((item, index) => (
              <li
                role="menuitem"
                key={index}
                id={`dropdown-item-${index}`}
                className={`relative flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 rounded-md ${
                  focusedIndex === index ? "bg-gray-100" : ""
                }`}
                tabIndex={focusedIndex === index ? 0 : -1}
                onKeyDown={(event) => handleItemKeyDown(event, index)}>
                {item.icon && <span>{item.icon}</span>}
                {item.url ? (
                  <Link
                    to={item.url}
                    rel="noopener noreferrer"
                    className="w-full text-left"
                    onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                ) : (
                  <button
                    className="w-full text-left"
                    onClick={() => {
                      item.action?.();
                      setOpen(false);
                    }}
                    type="button">
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
