import { CSSProperties } from 'vue'
import { Position, Element } from './flow'
import { GraphNode } from './node'

export enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}

export interface EdgeMarker {
  type: MarkerType
  color?: string
  width?: number
  height?: number
  markerUnits?: string
  orient?: string
  strokeWidth?: number
}

export interface MarkerProps {
  id: string
  type: MarkerType
  color?: string
  width?: number
  height?: number
  markerUnits?: string
  orient?: string
  strokeWidth?: number
}

export type EdgeMarkerType = string | EdgeMarker

export interface Edge<T = any> extends Element<T> {
  source: string
  target: string
  sourceHandle?: string
  targetHandle?: string
  sourcePosition?: Position
  targetPosition?: Position
  labelStyle?: any
  labelShowBg?: boolean
  labelBgStyle?: any
  labelBgPadding?: [number, number]
  labelBgBorderRadius?: number
  animated?: boolean
  markerStart?: EdgeMarkerType
  markerEnd?: EdgeMarkerType
  updatable?: boolean
}

export interface GraphEdge<T = any> extends Edge<T> {
  sourceNode: GraphNode
  targetNode: GraphNode
  selected?: boolean
  z?: number
}

export interface EdgeProps<Data = any> {
  id: string
  label?: string
  type?: string
  data?: Data
  class?: string
  style?: CSSProperties
  hidden?: boolean
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  selected?: boolean
  sourcePosition: Position
  targetPosition: Position
  sourceHandleId?: string
  targetHandleId?: string
  source: string
  target: string
  sourceHandle?: string
  targetHandle?: string
  labelStyle?: any
  labelShowBg?: boolean
  labelBgStyle?: any
  labelBgPadding?: [number, number]
  labelBgBorderRadius?: number
  animated?: boolean
  updatable?: boolean
  markerStart?: string
  markerEnd?: string
}

export interface SmoothStepEdgeProps<T = any> extends EdgeProps<T> {
  borderRadius?: number
}

export interface EdgePositions {
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
}

export interface GetCenterParams {
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  sourcePosition?: Position
  targetPosition?: Position
}

export interface GetBezierPathParams {
  sourceX: number
  sourceY: number
  sourcePosition?: Position
  targetX: number
  targetY: number
  targetPosition?: Position
  centerX?: number
  centerY?: number
}

export interface GetSmoothStepPathParams {
  sourceX: number
  sourceY: number
  sourcePosition?: Position
  targetX: number
  targetY: number
  targetPosition?: Position
  borderRadius?: number
  centerX?: number
  centerY?: number
}
