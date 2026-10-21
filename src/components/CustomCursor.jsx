import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const cursorTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer and desktop width
    if (typeof window === 'undefined') return;
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    const cursorText = cursorTextRef.current;
    if (!cursor || !cursorInner || !cursorText) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;
    let animationFrameId;
    let isMoving = false;

    const speed = 0.2; // Easing speed matching Numak Tech

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isMoving) {
        setIsVisible(true);
        isMoving = true;
      }

      // Outer cursor tracks mouse with smooth hardware acceleration
      cursor.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
    };

    // Smooth lerp loop for inner dot
    const render = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
      cursorInner.style.transform = `translate3d(calc(${posX}px - 50%), calc(${posY}px - 50%), 0)`;
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    // Click feedback
    const onMouseDown = () => {
      cursor.classList.add('cursor-click');
      cursorInner.classList.add('cursor-inner-click');
    };

    const onMouseUp = () => {
      cursor.classList.remove('cursor-click');
      cursorInner.classList.remove('cursor-inner-click');
    };

    // Window boundaries
    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Hover handler for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      // Check for custom cursor text target (e.g. project cards)
      const textTarget = target.closest('[data-cursor-text]');
      if (textTarget) {
        const customText = textTarget.getAttribute('data-cursor-text') || 'VIEW';
        cursorText.textContent = customText;
        cursor.classList.add('cursor-view');
        cursorInner.classList.add('cursor-inner-hidden');
        return;
      }

      // Check for clickable/interactive items (links, buttons, inputs, roles)
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-hover, .project-row, .service-card, .stat-card'
      );

      if (isInteractive) {
        cursor.classList.add('cursor-hover');
        cursorInner.classList.add('cursor-inner-hover');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const textTarget = target.closest('[data-cursor-text]');
      if (textTarget) {
        cursor.classList.remove('cursor-view');
        cursorInner.classList.remove('cursor-inner-hidden');
        cursorText.textContent = '';
      }

      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-hover, .project-row, .service-card, .stat-card'
      );
      if (isInteractive) {
        cursor.classList.remove('cursor-hover');
        cursorInner.classList.remove('cursor-inner-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Follower Ring with Text Container */}
      <div
        ref={cursorRef}
        className={`custom-cursor-outer ${isVisible ? 'cursor-visible' : 'cursor-hidden'}`}
        aria-hidden="true"
      >
        <span ref={cursorTextRef} className="custom-cursor-text"></span>
      </div>

      {/* Inner Lerping Dot */}
      <div
        ref={cursorInnerRef}
        className={`custom-cursor-inner ${isVisible ? 'cursor-visible' : 'cursor-hidden'}`}
        aria-hidden="true"
      ></div>
    </>
  );
}
