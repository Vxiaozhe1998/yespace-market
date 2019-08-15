class Checkbox {
  constructor () {
    this.borderColor = null
    this.bgColor = null
    this.lineColor = null
  }

  static get inputProperties() {
    return ['--status', '--disabled', '--bg-color', '--border-color', '--line-color']
  }

  paint (ctx, geom, properties) {
    const { width, height } = geom
    const status = this.getProp(properties, '--status')
    const disabled = this.getProp(properties, '--disabled')
    const borderRadius = width * 0.2
    this.borderColor = this.getProp(properties, '--border-color')
    this.bgColor = this.getProp(properties, '--bg-color')
    this.lineColor = this.getProp(properties, '--line-color')
    switch (status) {
      case 'unchecked': return this.drewUnChecked(ctx, width, height, borderRadius, disabled)
      case 'checked': return this.drewChecked(ctx, width, height, borderRadius, disabled)
      case 'indeterminate': return this.drewIndeterminate(ctx, width, height, borderRadius, disabled)
    } 
  }

  drewChecked (ctx, width, height, borderRadius, disabled) {
    this.drewRoundRect(ctx, 0, 0, width, height, borderRadius)
    ctx.fillStyle = this.bgColor
    ctx.fill()
    if (disabled === 'disabled') {
      ctx.lineWidth = width / 7
      ctx.strokeStyle = this.borderColor
      ctx.stroke()
    }
    this.drewCheckmark(ctx, width, height)
    ctx.lineWidth = width / 14
    ctx.strokeStyle = this.lineColor
    ctx.stroke()
  }

  drewUnChecked (ctx, width, height, borderRadius, disabled) {
    this.drewRoundRect(ctx, 0, 0, width, height, borderRadius)
    if (disabled === 'disabled') {
      ctx.fillStyle = this.bgColor
      ctx.fill()
    }
    ctx.strokeStyle = this.borderColor
    ctx.lineWidth = width / 7
    ctx.stroke()
  }

  drewIndeterminate (ctx, width, height, borderRadius, disabled) {
    this.drewRoundRect(ctx, 0, 0, width, height, borderRadius)
    ctx.fillStyle = this.bgColor
    ctx.fill()
    if (disabled === 'disabled') {
      ctx.lineWidth = width / 7
      ctx.strokeStyle = this.borderColor
      ctx.stroke()
    }
    const lineWidth = width / 14
    const y = height * 0.5
    this.drewLine(ctx, width * 0.25, y, width * 0.75, y)
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = this.lineColor
    ctx.stroke()
  }

  drewRoundRect (ctx, x, y, w, h, r) {
    const min_size = Math.min(w, h)
    if (r > min_size / 2) r = min_size / 2
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
  }

  drewCheckmark (ctx, width, height) {
    ctx.beginPath()
    ctx.save()
    ctx.translate(width * 0.5, height * 0.5)
    ctx.rotate(45 * Math.PI / 180)
    ctx.translate(-width * 0.5, -height * 0.5)
    ctx.moveTo(width * 0.3, height * 0.7)
    ctx.lineTo(width * 0.55, height * 0.7)
    ctx.lineTo(width * 0.55, height * 0.15)
    ctx.restore()
  }

  drewLine (ctx, x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.closePath()
  }

  getProp (properties, item) {
    return properties.get(item) && properties.get(item).toString().trim()
  }
}

registerPaint('checkbox', Checkbox)
